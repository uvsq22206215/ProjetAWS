import React from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect(props) {
  const navigate = useNavigate();
  const redirectTo = () => navigate("/" + props.path);

  redirectTo();

  return null;
}
