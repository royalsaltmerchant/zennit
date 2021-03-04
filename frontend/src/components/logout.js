import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory()

  useEffect(() => {
    runLogout()
  });

  function runLogout() {
    localStorage.removeItem("token")
    history.push("/")
    history.go("/")
  }
  return (
    <div>
    </div>
  )
}
