import path from "node:path";
import { fileURLToPath } from "node:url";

// Парсер и плагины импортируем как объекты
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Нужен для tsconfigRootDir, чтобы TypeScript ESLint правильно находил tsconfig.json.

export default [
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    // Начало массива конфигураций ESLint.
    // Первый объект — для всех исходников проекта (src) с расширениями TypeScript и JavaScript.

    // languageOptions.parser — объект парсера TypeScript, который позволяет ESLint понимать TS.
    languageOptions: {
      parser: tsParser, // объект парсера

      // parserOptions.project — указываем на tsconfig.json для type-checking (чтобы ESLint проверял типы).
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname, //корень для поиска tsconfig.json.
        ecmaVersion: "latest", //используем последнюю версию JS для парсера.
        sourceType: "module", // код ES Module.
        ecmaFeatures: { jsx: true }, // включаем поддержку JSX.
      },
      globals: { React: "readonly" }, // глобальная переменная React доступна для ESLint, чтобы не ругался на React.
    },

    plugins: {
      //Это нужно для flat config, чтобы ESLint знал, какие правила и функции применять.
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },

    // В flat config правила подключаем напрямую
    // Берём рекомендуемые правила из каждого плагина и подключаем их.
    // ... — spread operator, чтобы объединить все правила в один объект.
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs["recommended-requiring-type-checking"]?.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,

      // свои настройки правил поверх
      "@typescript-eslint/no-unused-vars": "warn", // предупреждаем о неиспользуемых переменных (warn),
      "@typescript-eslint/explicit-function-return-type": "off", // отключаем обязательное указание типа функции,
      "react/react-in-jsx-scope": "off", // отключаем проверку React в JSX (нужно для нового JSX-трансформера).
    },

    settings: {
      react: { version: "detect" }, //Настройка плагина React для автоматического определения версии React в проекте.
    },
  },

  //Второй объект конфигурации — для файлов тестов Jest.
  {
    files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],

    languageOptions: {
      parserOptions: {
        project: ["./config/jest/tsconfig.jest.json"],
        tsconfigRootDir: __dirname,
      },
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        jest: "readonly",
      },
    },

    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
