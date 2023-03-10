import React from "react";

function handleLeftClick(setIndex) {
  setIndex((prev) => {
    console.log(prev);
    return prev == 0 ? 4 : prev - 1;
  });
}

function handleRightClick(setIndex) {
  setIndex((prev) => {
    console.log(prev);
    return prev == 4 ? 0 : prev + 1;
  });
}
function Navbar({ imgSrc, setIndex }) {
  return (
    <div className="navbar">
      <button className="nav-btn" onClick={() => handleLeftClick(setIndex)}>
        ↓
      </button>
      <img src={imgSrc} alt="mentor pic" className="nav-pic" />
      <button className="nav-btn" onClick={() => handleRightClick(setIndex)}>
        ↓
      </button>
    </div>
  );
}

export default Navbar;
