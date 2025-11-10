export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    // indentation: 2, // базовые CSS-отступы
    "max-nesting-depth": 3, // ограничение вложенности
    "no-empty-source": null, // разрешаем пустые файлы
    "scss/at-rule-no-unknown": true,
  },
};
