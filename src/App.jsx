import "./App.css";
import React from "react";

import CornerCircle from "./components/CornerCircle/CornerCircle";
import Footer from "./components/Footer/Footer";
import MentorInfo from "./components/MentorInfo/MentorInfo";
import Navbar from "./components/Navbar/Navbar";
import { mentors } from "./data";

function setThemeColors(index) {
  if (index & 1) {
    document.documentElement.style.setProperty("--main-color", "#609B6C");
    document.documentElement.style.setProperty("--circle-color", "#7ABD87");
  } else {
    document.documentElement.style.setProperty("--main-color", "#4caf50");
    document.documentElement.style.setProperty("--circle-color", "#c5f8c7");
  }
}

function App() {
  const [index, setIndex] = React.useState(0);
  setThemeColors(index);
  return (
    <div className="App">
      <CornerCircle />
      <MentorInfo mentor={mentors[index]} />
      <Navbar imgSrc={mentors[index].imgSrc} setIndex={setIndex} />
      <Footer name={mentors[index].name} />
    </div>
  );
}

export default App;
