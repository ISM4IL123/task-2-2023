import React from "react";
import AuthWrapper from "./components/AuthWrapper";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "rgba(10, 30, 48, 0.3))",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <TopBar />
    <AuthWrapper />
    </div>
  );
}
export default App;