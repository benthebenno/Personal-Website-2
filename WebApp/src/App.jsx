import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackGround from "./components/InteractiveBackground";
import BackGround2 from "./components/InteractiveBackground2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <view className="mainScreen">
        <BackGround>
          <h1>gggggggggggggfffffffffffffffffffffffffffffffffffffffffffg</h1>
        </BackGround>
      </view>
      <view className="mainScreenSecondHalf">
        <BackGround2>
          <h1>gggggggggggggg</h1>
        </BackGround2>
      </view>
    </>
  );
}

export default App;
