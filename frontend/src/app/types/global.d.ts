/// <reference types="vite/client" />
declare module "stylelint-config-standard-scss";

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
