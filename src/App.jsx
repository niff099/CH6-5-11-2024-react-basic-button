import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/Navbar";
import HoverButton from "./components/buttons/HoverButton";

function Navbar() {
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>About Me</li>
        <li>FAQ</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["About Me", "FAQ", "Logout"];

  return (
    <>
      <NavbarWithStyling
        menu={listMenu}
        name="hanif"
        age="20"
        address="pede abis"
      />
      <NavbarWithStyling name="gipar" age="21" address="mang eak" />
      <NavbarWithStyling
        menu={["tentang FSW2", "KM7", "2024"]}
        name="ahmad"
        age="22"
        address="gassss"
      />

      <HoverButton>
        <p>TEST CHILDREN</p>
      </HoverButton>

      {/* <Navbar /> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;