import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme; // текущее значение
  setTheme?: (theme: Theme) => void; // изменяем
}

export const ThemeContext = createContext<ThemeContextProps>({});
// Создаём React-контекст с пустым объектом по умолчанию.
// Позже мы его обернём в провайдер, чтобы передавать theme и setItem вниз по компонентам.

export const LOCAL_STORAGE_THEME_KEY = "theme"; //Чтобы хранить выбор темы в браузере и сохранять при перезагрузке.
