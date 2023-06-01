import React from "react";

function LogoutButton(props) {
  function handleLogout() {
    // handle the logout action here
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
