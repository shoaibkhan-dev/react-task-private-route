import { Navigate, Outlet } from "react-router-dom";

   function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;