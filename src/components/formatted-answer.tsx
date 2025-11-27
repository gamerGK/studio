'use client';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

// This regex finds LaTeX expressions ($...$ for inline, $$...$$ for block)
const latexRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g;

const MathRenderer = ({ text }: { text: string }) => {
  const parts = text.split(latexRegex);

  return (
    <p className="text-muted-foreground whitespace-pre-wrap">
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
    </p>
  );
};

export function FormattedAnswer({ jsonString }: { jsonString: string }) {
  try {
    // Attempt to parse as JSON first for structured data
    const data = JSON.parse(jsonString);
    // A simple JSON renderer that will also process strings for math
    const prettyJson = JSON.stringify(data, null, 2);
    return <MathRenderer text={prettyJson} />;
  } catch (error) {
    // If it's not valid JSON, render it as plain text with math support.
    return <MathRenderer text={jsonString} />;
  }
}