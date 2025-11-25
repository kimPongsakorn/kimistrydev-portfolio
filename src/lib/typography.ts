/**
 * Typography constants for consistent text styling
 */

export const typography = {
  // Headings
  h1: "text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4",
  h2: "text-xl sm:text-xl md:text-xl font-bold text-gray-900 dark:text-white mb-3",
  h3: "text-lg sm:text-lg md:text-lg font-semibold text-gray-900 dark:text-white mb-2",
  
  // Body text
  body: "text-base text-gray-700 dark:text-gray-300",
  bodyLarge: "text-lg text-gray-600 dark:text-gray-400",
  bodySmall: "text-sm text-gray-600 dark:text-gray-400",
  
  // Labels
  label: "font-bold text-gray-900 min-w-[60px] dark:text-gray-100",
  
  // Placeholders
  placeholder: "placeholder:text-gray-400",
} as const;

