import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

// style variables for light and dark mode
const darkMode = {
  backgroundColor: "black",
  color: "white",
};

const lightMode = {
  backgroundColor: "white",
  color: "black",
};

export default function App() {
  //state variable named styleMode with an initial state of lightMode.
  const [styleMode, setStyleMode] = useState("lightMode");

  return (
    <div>
      {/* is styleMode equal to lightmode? If so, Set to darkMode. Else set to lightMode */}
      <button
        onClick={() => {
          styleMode === "lightMode"
            ? setStyleMode("darkMode")
            : setStyleMode("lightMode");
        }}
      >
        Toggle Mode
      </button>

      {/* import components and Pass a styleMode state as a prop to the the child components. */}
      <Header header={{ styleMode }} />
      <Content content={{ styleMode }} />
      <Footer footer={{ styleMode }} />
    </div>
  );
}
