// LIBs
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CONFIG
import { appConfig } from "./app";

// TEMPLATE
import { Root } from "../../template/root";

// VIEWs
import { ViewHome } from "../../views/home";
import { ViewAbout } from "../../views/about";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <ViewHome />
      },
      {
        path: "sobre",
        element: <ViewAbout />
      },
      {
        path: "empreendimentos",
        element: <ViewHome />
      },
      {
        path: "contato",
        element: <ViewHome />
      },
    ]
  }
], {
  basename: appConfig.path,
});

export function Router() {
  return (
    <RouterProvider router={browserRouter} />
  );
}
