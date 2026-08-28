import type { ReactElement } from 'react';

const brandColor = '#BA9765';

// Article/page content is authored as plain strings with an optional lightweight
// [texte](url) syntax for citing external sources inline. Since this content is
// hand-written in *Content.ts files (never user input), splitting on the pattern
// and rendering real <a> elements is simpler and safer than a full markdown parser
// or dangerouslySetInnerHTML. Shared by BlogArticle and Commune pages.
export function renderParagraph(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactElement)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-semibold hover:opacity-80 transition-opacity"
        style={{ color: brandColor }}
      >
        {match[1]}
      </a>,
    );
    lastIndex = linkPattern.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}
