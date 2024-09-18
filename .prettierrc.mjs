/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  semi: false,
  trailingComma: 'none',
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  quoteProps: 'as-needed',
  endOfLine: 'auto',
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
