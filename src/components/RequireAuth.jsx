import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/storage";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const roles = getItem("roles");
  const user = getItem("user");
  return allowedRoles?.includes(roles) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
