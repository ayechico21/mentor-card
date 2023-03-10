import React from "react";

function Footer({ name }) {
  return (
    <div className="footer">
      <button>Book a session</button>
      <div className="mentor-name">{name}</div>
    </div>
  );
}

export default Footer;
