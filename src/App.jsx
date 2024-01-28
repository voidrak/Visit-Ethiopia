import { useEffect, useState } from "react";
import "./App.css";
import { MidPage } from "./components/MidPage/MidPage";
import { TopPage } from "./components/TopPage/TopPage";
import { MobileVersion } from "./components/MobileVersion/MobileVersion";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      {screenWidth > 1920 ? (
        <>
          <TopPage />
          <MidPage />
        </>
      ) : (
        <MobileVersion />
      )}
    </div>
  );
}

export default App;
