import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackGround from "./components/InteractiveBackground";
import BackGround2 from "./components/InteractiveBackground2";
import colors from "./config/colors";
import MaintTitle from "./components/MainTitle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="mainScreen">
        <BackGround>
          <MaintTitle></MaintTitle>
        </BackGround>
      </div>
      <div className="mainScreenSecondHalf">
        <BackGround2></BackGround2>
      </div>
      <div className="aboutMeScreen">
        <h1>MEEE</h1>
      </div>
    </div>
  );
}

export default App;
