'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// This regex finds LaTeX expressions, including multi-line ones
const latexRegex = /(\$\$.*?\$\$|\$.*?\$)/gs;

const MathRenderer = ({ text }: { text: string }) => {
  const parts = text.split(latexRegex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math for expressions between $$...$$
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math for expressions between $...$
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        // Regular text
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};


const JsonValue = ({ value }: { value: any }) => {
  if (typeof value === 'string') {
    return (
      <span className="text-green-400">
        "<MathRenderer text={value} />"
      </span>
    );
  }
  if (typeof value === 'number') {
    return <span className="text-blue-400">{value}</span>;
  }
  if (typeof value === 'boolean') {
    return <span className="text-red-400">{String(value)}</span>;
  }
  if (value === null) {
    return <span className="text-gray-500">null</span>;
  }
  if (Array.isArray(value)) {
    return <JsonArray array={value} />;
  }
  if (typeof value === 'object') {
    return <JsonObject obj={value} />;
  }
  return null;
};

const JsonObject = ({ obj }: { obj: Record<string, any> }) => {
  const entries = Object.entries(obj);
  return (
    <div className="pl-4">
      {'{'}
      <div className="pl-4">
        {entries.map(([key, value], index) => (
          <div key={key}>
            <span className="text-purple-400">"{key}"</span>: <JsonValue value={value} />
            {index < entries.length - 1 ? ',' : ''}
          </div>
        ))}
      </div>
      {'}'}
    </div>
  );
};

const JsonArray = ({ array }: { array: any[] }) => {
  return (
    <div className="pl-4">
      {'['}
      <div className="pl-4">
        {array.map((value, index) => (
          <div key={index}>
            <JsonValue value={value} />
            {index < array.length - 1 ? ',' : ''}
          </div>
        ))}
      </div>
      {']'}
    </div>
  );
};

export function FormattedAnswer({ jsonString }: { jsonString: string }) {
  try {
    const data = JSON.parse(jsonString);
    return (
      <div className="font-code text-sm bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
        <JsonObject obj={data} />
      </div>
    );
  } catch (error) {
    // If it's not valid JSON, render it as plain text with math support.
    return (
      <p className="text-muted-foreground whitespace-pre-wrap">
        <MathRenderer text={jsonString} />
      </p>
    );
  }
}
