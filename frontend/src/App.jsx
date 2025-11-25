import React, { use, useEffect, useState } from "react";
import TopBar from "./components/TopBar";

import LoginPage from "./Login/LoginPage";
import SignupPage from "./Sign up/SignupPage";
import HomePage from "./HomePage":

export default function App() {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || "login"
  );
  useEffect(() => {localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const goToLogin = () => setCurrentPage("login");
  const goToSignup = () => setCurrentPage("signup");
  const goToHome = () => setCurrentPage("home");
  
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #131e30, #243b55)",
      display: "flex",
      alignItems: "center"
    }}>
      <TopBar/>
      {currentPage === "login" && (
        <LoginPage onLoginSuccess={goToHome} goToSignup={goToSignup}/>
      )}
      {currentPage === "signup" && (
        <SignupPage goToLogin={goToLogin} />
      )}
      {currentPage === "home" && (
        <HomePage goToLogin={goToLogin} />
      )}
    </div>
  );
}