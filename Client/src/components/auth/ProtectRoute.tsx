import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectRouteProps = {
  children: ReactNode | undefined;
  user: boolean; // Adjust the type based on your user object structure
  redirect?: string; // Redirect is optional, so we use `?` for that
};

const ProtectRoute = ({
  children = undefined,
  user,
  redirect = "/login",
}: ProtectRouteProps) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectRoute;
