import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let data = JSON.parse(sessionStorage.getItem("user-signin"));
  if (data == null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
