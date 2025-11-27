'use client';

import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export function FormattedAnswer({ content }: { content: string }) {
  return (
    <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
