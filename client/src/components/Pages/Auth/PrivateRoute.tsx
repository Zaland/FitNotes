import { ReactNode } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

interface PrivateRouteProps extends RouteProps {
  children?: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { doesSessionExist } = useSessionContext();

  return doesSessionExist ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/signin" replace />
  );
};
