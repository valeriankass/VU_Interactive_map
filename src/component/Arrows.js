import React from 'react';

import "./Arrows.css"
import arrows from "../data/image/arrows.png";

var pageHeight = window.innerHeight;

function scrollDown() {
  window.scrollTo(0,pageHeight);
}

export default function Arrows() {
  return (
      <img
        className="arrows"
        src={arrows}
        alt="arrows"
        onClick={scrollDown}
      />
  );
}
