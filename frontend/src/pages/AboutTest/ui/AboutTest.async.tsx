import { lazy } from "react";

export const AboutTestAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error this exampel
      setTimeout(() => resolve(import("./AboutTest")), 1500);
    })
);
