import { Outlet } from "react-router-dom";
import Header from "../pages/components/Header";

export default function HeaderLayout() {
  return (
    <>
      <Header /> <Outlet />
    </>
  );
}
