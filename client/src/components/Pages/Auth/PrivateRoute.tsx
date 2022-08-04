import { ReactNode } from "react";
import { Navigate, RouteProps, Outlet } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

interface PrivateRouteProps extends RouteProps {
  children?: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { doesSessionExist } = useSessionContext();

  return doesSessionExist ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth/signin" replace />
  );
};
