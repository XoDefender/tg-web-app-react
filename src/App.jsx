import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import Button from "./components/Button/Button";

import { ways } from "./data";
import { getMessage } from "./test.tsx";

const tgWindow = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tgWindow.ready();
  });

  const [content, setContent] = useState("Some data");

  function clickHandle(type) {
    const data = getMessage();
    setContent(data);
    console.log("Click handled", type, data);
  }

  function clickHandleTg(type) {
    tgWindow.close();
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <TextBlock {...ways[0]} />
        <TextBlock {...ways[1]} />
        <Button onClick={() => clickHandle("btn1")}>Button 2</Button>
        <Button onClick={() => clickHandle("btn2")}>Button 1</Button>
        <Button onClick={() => clickHandleTg()}>Close</Button>
      </div>
      <p className="read-the-docs">Stated text = {content}</p>
    </>
  );
}

export default App;
