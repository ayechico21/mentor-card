import "./App.css";
import CornerCircle from "./components/CornerCircle/CornerCircle";
import Footer from "./components/Footer/Footer";
import MentorInfo from "./components/MentorInfo/MentorInfo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <CornerCircle />
      <MentorInfo />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
