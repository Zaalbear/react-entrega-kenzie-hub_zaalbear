import { useContext } from "react";
import { PageContext } from "../../providers/PageContext";
import { Navigate, Outlet } from "react-router-dom";

export const SafeRoutes = () => {
  const { userData } = useContext(PageContext);

  return userData ? <Outlet /> : <Navigate to={"/"} />;
};
