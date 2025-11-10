// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  // Базовые правила ESLint
  eslint.configs.recommended,

  // Базовые правила для TypeScript
  ...tseslint.configs.recommended,

  // Проверки с учётом типов
  ...tseslint.configs.recommendedTypeChecked,

  // Стили TypeScript
  ...tseslint.configs.stylisticTypeChecked,

  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["eslint.config.*", "dist", "node_modules", "storybook-static"],

    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // Рекомендованные правила React
      ...react.configs.recommended.rules,

      // Доступность
      ...jsxA11y.configs.recommended.rules,

      // Общие стилистические настройки
      "react/react-in-jsx-scope": "off", // для React 17+
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  }
);
