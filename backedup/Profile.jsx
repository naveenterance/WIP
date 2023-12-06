import React, { useState, useEffect } from "react";
import * as jose from "jose";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/Login" />;
  }

  console.log(token);
  const claims = jose.decodeJwt(token);
  console.log(claims.userId);

  const Logout = () => {
    localStorage.removeItem("token");
    setLoggedOut(true);
  };
  if (isLoggedOut) {
    return <Navigate to="/Login" />;
  }

  return (
    <>
      <div>Login successful:{claims.userId}</div>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default Profile;
