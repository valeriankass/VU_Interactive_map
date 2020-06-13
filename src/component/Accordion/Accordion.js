import React from 'react';

import "./Accordion.css";

export default function Accordion(props) {

  return (
    <div
      className={"accordion__child " + (props.open ? 'open' : 'closed')}
    >
      <div
        className="accordion__title"
        onClick={() => props.toggleStudySpot(props.index, props.type)}
        onMouseDown={e => e.stopPropagation()}
      >
        {props.title}
      </div>

      <div className="accordion__body">
        {props.body}
      </div>
    </div>
  );
}

//todo: add hover color change
