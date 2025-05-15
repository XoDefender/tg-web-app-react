import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import Button from "./components/Button/Button";

import { ways } from "./data";
import { getMessage } from "./test.tsx";

const tg = window.Telegram.WebApp;

const OnBtnActions = {
  CLOSE: 0,
  SHOWUSERINFO: 1,
};

function App() {
  useEffect(() => {
    tg.ready();
  });

  const [content, setContent] = useState("Some data");

  function clickHandle(actionID) {
    switch (actionID) {
      case OnBtnActions.CLOSE:
        tg.close();
        break;

      case OnBtnActions.SHOWUSERINFO:
        setContent(tg.initDataUnsafe?.user?.username);
        break;

      default:
        console.log("Unknown action.");
    }
  }

  function clickHandleTg(type) {
    tg.close();
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <TextBlock {...ways[0]} />
        <TextBlock {...ways[1]} />
        <Button onClick={() => clickHandle("btn1")}>Button 1 </Button>
        <Button onClick={() => clickHandle(OnBtnActions.SHOWUSERINFO)}>
          User info
        </Button>
        <Button onClick={() => clickHandle(OnBtnActions.CLOSE)}>Close</Button>
      </div>
      <p className="read-the-docs">Stated text = {content}</p>
    </>
  );
}

export default App;
