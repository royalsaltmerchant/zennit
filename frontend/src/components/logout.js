import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory()

  useEffect(() => {
    runLogout()
  });

  function runLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("loginMessage")
    history.push("/")
    history.go("/")
  }
  return (
    <div>
    </div>
  )
}
