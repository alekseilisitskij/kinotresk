import { type RouteProps } from "react-router-dom";
import { Main } from "../../../pages/Main/index";
import { NotFoundPage } from "../../../pages/NotFoundPage/index";
// import { lazy } from "react";

export enum AppRoutes {
  MAIN = "main",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
