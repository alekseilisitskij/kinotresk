type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls, // основной класс
    ...additional.filter(Boolean), // добавляем доп. классы, которые не пустые
    ...Object.entries(mods) // превращаем объект mods в массив пар [ключ, значение]
      .filter(([className, value]) => Boolean(value)) // оставляем только активные
      .map(([className]) => className), // берём только имена классов
  ].join(" ");
}
