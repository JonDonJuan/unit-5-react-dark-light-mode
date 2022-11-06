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

function App() {
  //state variable named styleMode with an initial state of lightMode.
  const [styleMode, setStyleMode] = useState("lightMode");

  /* handle button click event : is styleMode equal to lightmode? If so, Set to darkMode. Else set to lightMode */

  const handleClick = () => {
    styleMode === "lightMode"
      ? setStyleMode("darkMode")
      : setStyleMode("lightMode");
  };

  return (
    <div>
      {/* /button that accepts handleClick */}
      <button onClick={console.log(handleClick)}>Toggle Theme</button>
      {/* import components and Pass a styleMode state as a prop to the the child components */}
      <Header header={{ styleMode }} />
      <Content content={{ styleMode }} />
      <Footer footer={{ styleMode }} />
    </div>
  );
}

export default App;
