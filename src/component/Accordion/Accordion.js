import React from 'react';

import "./Accordion.css";

export default function Accordion(props) {

  return (
    <div
      className={"accordion__child " + (props.open ? 'open' : 'closed')}
      onClick={() => props.toggleStudySpot(props.index, props.type)}
    >
      <div className="accordion__title">
        {props.title}
      </div>

      <div className="accordion__body">
        {props.body}
      </div>
    </div>
  );
}

//todo: add hover color change
