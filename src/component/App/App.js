import React from "react";

import "./App.css"

import Arrows from "../Arrows/Arrows";
import Map from "../Map/Map";
import Filler from "../Filler";


export default function App() {
  return (
    <div>
      <Map />
      <Arrows />
      <Filler />
    </div>
  );
}
