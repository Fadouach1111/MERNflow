import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      react: pluginReact, // Use the plugin object here
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // Add rules directly
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];

