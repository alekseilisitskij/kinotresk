import { type RouteProps } from "react-router-dom";
import { MainTest } from "../../../pages/MainTest/index";
import { Suspense } from "react";
import { AboutTest } from "../../../pages/AboutTest/index";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainTest />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutTest />
      </Suspense>
    ),
  },
};
