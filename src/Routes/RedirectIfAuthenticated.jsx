import { Navigate, Outlet } from "react-router-dom";

    function RedirectIfAuthenticated() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user ? <Navigate to="/" replace /> : <Outlet />;
}

export default RedirectIfAuthenticated;