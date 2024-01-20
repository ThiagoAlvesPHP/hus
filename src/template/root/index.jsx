// LIBs
import { Outlet } from "react-router-dom";

// LAYOUT
import { LayoutHeader } from "./layout/header";
import { LayoutFooter } from "./layout/footer";

export function Root() {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </div>
  );
}
