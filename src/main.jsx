import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainLayout } from "./layouts";
import { Provider } from "react-redux";
import { store } from "./RTK/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Detail, Search, Favorite } from "./pages";
import { ROUTES as ROUTE_PATHS } from "./constants/urls";

const ROUTES = [
  {
    path: ROUTE_PATHS.HOME,
    element: <MainLayout />,
    children: [
      { path: ROUTE_PATHS.HOME, element: <Main /> },
      { path: ROUTE_PATHS.DETAIL, element: <Detail /> },
      { path: ROUTE_PATHS.SEARCH, element: <Search /> },
      { path: ROUTE_PATHS.FAVORITE, element: <Favorite /> },
    ],
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children?.map((child) => (
                <Route key={child.path} path={child.path} element={child.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
