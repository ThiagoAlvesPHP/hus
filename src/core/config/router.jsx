// LIBs
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CONFIG
import { appConfig } from "./app";

// TEMPLATE
import { Root } from "../../template/root";

// VIEWs
import { ViewHome } from "../../views/home";
import { ViewAbout } from "../../views/about";
import { ViewEnterprises } from "../../views/enterprises";
import { ViewProject } from "../../views/project";
import { ViewContact } from "../../views/contact";
import { ViewPolicyAndPrivacy } from "../../views/policyandprivacy";

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
        element: <ViewEnterprises />
      },
      {
        path: "projeto",
        element: <ViewProject />
      },
      {
        path: "contato",
        element: <ViewContact />
      },
      {
        path: "politicade-de-privacidade",
        element: <ViewPolicyAndPrivacy />
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
