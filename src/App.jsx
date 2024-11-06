import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

import BestSellers from "./Components/BestSellers";
import HorizontalScrollText from "./Components/HorizontalScrollText";
import Values from "./Components/Values";
import Contact from "./Components/Contact";

function App() {
  console.log("HelpCircleIcon");
  return (
    <>
      <div className="h-svh flex flex-col justify-between px-3 bg-white">
        <Navbar link1={"Contact"} link2={"Gallery"} />
        <Header />
        <Navbar link1={"Our Work"} link2={"Bestsellers"} />
      </div>
      <hr className="w-11/12 mt-5 mx-auto" />
      <BestSellers />
      <HorizontalScrollText />
      <Values />
      <Contact />
    </>
  );
}

export default App;
