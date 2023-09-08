import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="logo" />
        <img src="app.svg" alt="logo" />
        <img src="expand.svg" alt="logo" />
        <div className="notification">
          <img src="notifications.svg" alt="logo" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
            alt="profile"
          />
          <span>Raan</span>
        </div>
        <img src="setting.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
