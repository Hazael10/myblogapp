import Header from "./header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default MainLayout;
