import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/api/admin/checkAuth",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      if (res?.data?.isLoggedIn) {
        navigate("admin");
      } 
    });
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
