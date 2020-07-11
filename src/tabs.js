module.exports = Tabs = () => ({
  ".tab": {
    "@apply flex items-end border-b-2 border-gray-200": {},
  },
  ".tab-link": {
    "@apply py-3 px-4 text-gray-600 border-gray-200 border-b-2 transition-colors duration-150 ease-in font-medium text-center text-base": {},
    marginBottom: "-2px",
    "&:hover": {
      "@apply border-gray-400 text-gray-900": {},
    },
    "&:focus": {
      "@apply border-gray-400 text-gray-900 shadow-outline outline-none": {},
    },
  },
  ".tab-vertical .tab-link:hover": {
    "@apply border-gray-400 text-gray-900": {},
  },
  ".tab-vertical .tab-link.active, .tab-link.active": {
    "@apply text-purple-700 border-purple-700": {},
  },
  ".tab-link.disabled": {
    "@apply opacity-25 pointer-events-none cursor-default": {},
  },
  ".tab-full .tab-link": {
    "@apply w-full": {},
  },
  // Sizes
  ".tab-sm .tab-link": {
    "@apply text-xs py-1 px-2": {},
  },
  ".tab-lg .tab-link": {
    "@apply text-lg px-5": {},
  },
  // Vertical
  ".tab-vertical": {
    "@apply flex-col items-start border-0": {},
  },
  ".tab-vertical .tab-link": {
    "@apply border-b-0 border-l-2 border-transparent py-2": {},
  },
});
