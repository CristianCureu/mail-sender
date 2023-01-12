import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const admin = localStorage.getItem("token");
  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
