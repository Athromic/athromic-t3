module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'next/core-web-vitals', // Next.js specific rules (if you're using Next.js)
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
};
