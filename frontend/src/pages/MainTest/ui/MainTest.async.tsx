import { lazy } from "react";
import type { FC } from "react";

export const MainTestAsync = lazy(
  () =>
    new Promise<{ default: FC }>((resolve) => {
      // ❗ Только для демонстрации, в реальных проектах без setTimeout
      setTimeout(() => resolve(import("./MainTest")), 1500);
    })
);
