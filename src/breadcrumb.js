module.exports = Button = () => ({
  ".breadcrumb": {
    "@apply flex flex-wrap py-2 px-3 list-none rounded bg-purple-100 relative whitespace-no-wrap": {},
  },
  ".breadcrumb-item": {
    "@apply text-gray-600": {},
  },
  ".breadcrumb-item a": {
    "@apply text-purple-700": {},
  },
  ".breadcrumb-item, .breadcrumb-item a": {
    "@apply text-base flex items-center": {},
  },
  ".breadcrumb-item svg": {
    "@apply h-4 w-4 mr-1": {},
  },
  ".breadcrumb-sm .breadcrumb-item, .breadcrumb-sm .breadcrumb-item a": {
    "@apply text-xs !important": {},
  },
  ".breadcrumb-sm .breadcrumb-item svg": {
    "@apply h-3 w-3 !important": {},
  },
  ".breadcrumb-lg .breadcrumb-item, .breadcrumb-lg .breadcrumb-item a": {
    "@apply text-xl !important": {},
  },
  ".breadcrumb-lg .breadcrumb-item svg": {
    "@apply h-5 w-5 !important": {},
  },
  ".breadcrumb-item + .breadcrumb-item": {
    "@apply pl-3": {},
  },
  ".breadcrumb-item + .breadcrumb-item::before": {
    "@apply inline-block pr-3 text-gray-600": {},
    content: "'/'",
  },
  ".breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before": {
    content: "'→' !important",
  },
  ".breadcrumb-arrowhead .breadcrumb-item + .breadcrumb-item::before": {
    content: "'>' !important",
  },
  ".breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before": {
    content: "'·' !important",
  },
  ".breadcrumb.breadcrumb-light": {
    "@apply bg-gray-100": {},
  },
  ".breadcrumb.breadcrumb-dark": {
    "@apply bg-gray-900 border-gray-900 text-white": {},
  },
  ".breadcrumb.breadcrumb-dark .breadcrumb-item": {
    "@apply text-white": {},
  },
  ".breadcrumb.breadcrumb-dark .breadcrumb-item a": {
    "@apply text-purple-400": {},
  },
  ".breadcrumb.breadcrumb-dark .breadcrumb-item::before": {
    "@apply text-white": {},
  },
});
