import { useContext } from "react";
import userContext from "../contexts/userContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const { user } = useContext(userContext);

  if (!user) {
    return <Navigate to="/"  replace/>;
  }
  return <Outlet />;
}
