import React from "react";

import "./App.css"

import Map from "../Map/Map";
import Arrows from "../Arrows/Arrows";
import AccordionHandler from "../AccordionHandler/AccordionHandler";

export default function App() {
  return (
    <div>
      <Map />
      <Arrows />
      <AccordionHandler />
    </div>
  );
}
