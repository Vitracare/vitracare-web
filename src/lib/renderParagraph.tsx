import type { ReactElement } from 'react';
import { withLangPrefix } from '../components/LocalizedLink';

const brandColor = '#BA9765';

// Article/page content is authored as plain strings with an optional lightweight
// [texte](url) syntax for citing external sources inline. Since this content is
// hand-written in *Content.ts files (never user input), splitting on the pattern
// and rendering real <a> elements is simpler and safer than a full markdown parser
// or dangerouslySetInnerHTML. Shared by BlogArticle and Commune pages.
//
// `langPrefix` (e.g. '', '/nl', '/en') is required so internal links (those
// starting with "/") resolve to the *current* language's version of the target
// page — without it, every cross-link authored as [texte](/blog/...) silently
// pointed to the French URL even from the NL/EN article, since the content
// strings never carry a language prefix themselves. External links (http...)
// are untouched and still open in a new tab; internal links stay in the same
// tab, like any normal in-site navigation.
export function renderParagraph(text: string, langPrefix: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactElement)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const rawUrl = match[2];
    const isInternal = rawUrl.startsWith('/');
    const href = isInternal ? withLangPrefix(rawUrl, langPrefix) : rawUrl;
    parts.push(
      <a
        key={key++}
        href={href}
        {...(isInternal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
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
