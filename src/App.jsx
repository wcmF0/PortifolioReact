import "./App.css";
import About from "./componentes/About";
import TextContent from "./componentes/TextContent";
import { useState, useEffect } from "react";

const App = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setGlowPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app_container">
      <div
        className="mouse-glow"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
        }}
      ></div>
      <About />
      <TextContent />
    </div>
  );
};

export default App;
