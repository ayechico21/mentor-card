import "./App.css";
import React from "react";

import CornerCircle from "./components/CornerCircle/CornerCircle";
import Footer from "./components/Footer/Footer";
import MentorInfo from "./components/MentorInfo/MentorInfo";
import Navbar from "./components/Navbar/Navbar";
import { mentors } from "./data";

function App() {
  const [index, setIndex] = React.useState(0);
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
