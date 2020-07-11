module.exports = Markdown = () => ({
  ".markdown": {
    "@apply text-gray-900 leading-normal break-words": {},
  },
  ".markdown > * + *": {
    "@apply mt-0 mb-4": {},
  },
  ".markdown li:not(.breadcrumb-item):not(.list-item) + li:not(.breadcrumb-item):not(.list-item)": {
    "@apply mt-1": {},
  },
  ".markdown li > p + p": {
    "@apply mt-6": {},
  },
  ".markdown strong": {
    "@apply font-semibold": {},
  },
  ".markdown .breadcrumb-item a": {
    "@apply font-normal no-underline !important": {},
  },
  ".markdown strong a": {
    "@apply font-bold": {},
  },
  ".markdown a:not(.btn):not(.badge):not(.card):not(.avatar-text):not(.list-item):not(.pagination-link):not(.pagination-disabled):not(.dropdown-item):not(.tab-link)": {
    "@apply text-purple-700 font-semibold": {},
  },
  ".markdown h1:first-child, .markdown h2:first-child, .markdown h3:first-child, .markdown h4:first-child, .markdown h5:first-child, .markdown h6:first-child": {
    "@apply mt-0": {},
  },
  ".markdown h1:last-child, .markdown h2:last-child, .markdown h3:last-child, .markdown h4:last-child, .markdown h5:last-child, .markdown h6:last-child": {
    "@apply mb-0": {},
  },
  ".markdown h1": {
    "@apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2": {},
  },
  ".markdown h2": {
    "@apply leading-tight border-b text-2xl font-semibold mb-4 mt-8 pb-2": {},
  },
  ".markdown h3": {
    "@apply leading-snug text-lg font-semibold mb-4 mt-6": {},
  },
  ".markdown h4": {
    "@apply leading-none text-base font-semibold mb-4 mt-6": {},
  },
  ".markdown h5": {
    "@apply leading-tight text-sm font-semibold mb-4 mt-6": {},
  },
  ".markdown h6": {
    "@apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6": {},
  },
  ".markdown blockquote": {
    "@apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600": {},
  },
  ".markdown code": {
    "@apply font-mono text-sm bg-gray-200 inline rounded px-1 py-1 whitespace-pre-wrap": {},
  },
  ".markdown pre": {
    "@apply rounded bg-gray-200 p-4 inline-block scrolling-touch w-full !important": {},
  },
  ".markdown pre code": {
    "@apply block bg-transparent p-0 overflow-visible rounded-none": {},
  },
  ".markdown ul:not(.breadcrumb):not(.list):not(.pagination)": {
    "@apply text-base pl-8 list-disc": {},
  },
  ".markdown ol": {
    "@apply text-base pl-8 list-decimal": {},
  },
  ".markdown kbd": {
    "@apply text-xs inline-block rounded border px-1 py-4 align-middle font-normal font-mono shadow": {},
  },
  ".markdown table": {
    "@apply text-base border-gray-600": {},
  },
  ".markdown th": {
    "@apply border py-1 px-3": {},
  },
  ".markdown td": {
    "@apply border py-1 px-3": {},
  },
});
