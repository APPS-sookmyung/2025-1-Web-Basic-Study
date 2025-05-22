import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />
      <div style={{ padding: 16 }}>리엑트 공부 9강 중!</div>
    </div>
  );
}

export default LandingPage;
