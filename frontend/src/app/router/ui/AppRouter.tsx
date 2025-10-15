import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Routes>
    //     {Object.values(routeConfig).map(({ element, path }) => (
    //       <Route
    //         key={path}
    //         element={
    //           <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    //         }
    //         path={path}
    //       />
    //     ))}
    //   </Routes>
    // </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
