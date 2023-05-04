import { UserAuth } from "../context/Usercontext";
import { Navigate, useNavigate } from "react-router-dom";
import Redirect from "../pages/Redirect";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  let data = JSON.parse(sessionStorage.getItem("user-signin"));
  console.log(data);
  if (data == null) {
    console.log("yes");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
