/// <reference types="vite/client" />
declare module "stylelint-config-standard-scss";
declare module "eslint-plugin-jsx-a11y";
import "@testing-library/jest-dom";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
