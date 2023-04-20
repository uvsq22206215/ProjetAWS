import React from "react";
import { redirect } from "react-router-dom";
import { UserAuth } from "../context/Usercontext";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = UserAuth();

  let data = JSON.parse(sessionStorage.getItem("user-signin"));

  if (!data || !user) {
    logout();
    return redirect("/login");
  }
  return children;
};

export default ProtectedRoute;
