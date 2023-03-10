import React from "react";

function Navbar() {
  const imgSrc = "src/assets/m5.png";
  return (
    <div className="navbar">
      <button className="nav-btn">↓</button>
      <img src={imgSrc} alt="mentor pic" className="nav-pic" />
      <button className="nav-btn">↓</button>
    </div>
  );
}

export default Navbar;
