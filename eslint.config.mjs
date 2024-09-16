import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import jsEslintPlugin from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";

const { configs: reactCongigs } = reactPlugin;
const { configs: jsConfigs } = jsEslintPlugin;
const { configs: tsConfigs } = tsEslintPlugin;
const { configs: importPluginConfigs } = importPlugin;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });

export default [
  {
    ignores: ["node_modules/**", "build/**", "eslint.config.mjs"],
  },
  jsConfigs.recommended,
  // reactCongigs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "no-use-before-define": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "no-shadow": "off",

      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".tsx"],
        },
      ],

      "import/extensions": "off",
      "default-param-last": "off",
      "react/function-component-definition": "off",
      "import/no-extraneous-dependencies": "off",
      "react/prop-types": "off",
    },
  },
];
