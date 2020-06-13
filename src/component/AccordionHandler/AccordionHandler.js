import React, { useState } from 'react'
import Accordion from '../Accordion/Accordion'

import "./AccordionHandler.css"
import * as studySpots from "../../data/json/study-spots.json";

export default function AccordionHandler() {
  const [studySpots_State, setstudySpots_State] = useState(studySpots.features);

  const toggleStudySpot = (index, type) => {
    setstudySpots_State(studySpots_State.map((spot) => {
      if (spot.properties.id === index) {
        if (type === "building") {
          spot.metadata.open_building = !spot.metadata.open_building
        } else if (type === "floor") {
          spot.metadata.open_floor = !spot.metadata.open_floor
        }
      }

      return spot;
    }))
  }

  //Those consts are required to obtain unique buildings and floors
  const buildings = studySpots_State.map(spot => spot.properties.building);
  const floors = studySpots_State.map(spot => spot.properties.floor);

  return (
    <div className="accordion__container">
      {studySpots_State.filter((spot_building, i) => (
        buildings.indexOf(spot_building.properties.building) === i
      )).map((filteredSpot_building) => (
        <Accordion //Building
          key={filteredSpot_building.properties.id}
          type={"building"}
          index={filteredSpot_building.properties.id}
          open={filteredSpot_building.metadata.open_building}
          toggleStudySpot={toggleStudySpot}
          title={filteredSpot_building.properties.building}
          body={
            studySpots_State.filter((spot_floor, i) => (
                spot_floor.properties.building === filteredSpot_building.properties.building &&
              floors.indexOf(spot_floor.properties.floor) === i
            )).map((filteredSpot_floor) => (
              <Accordion //Floor
                key={filteredSpot_floor.properties.id}
                type={"floor"}
                index={filteredSpot_floor.properties.id}
                open={filteredSpot_floor.metadata.open_floor}
                toggleStudySpot={toggleStudySpot}
                title={filteredSpot_floor.properties.floor}
                body={
                  studySpots_State.filter((spot_room) => (
                    spot_room.properties.floor === filteredSpot_floor.properties.floor
                  )).map((filteredSpot_room) => (
                    <div
                      className="accordionless_body"
                      key={filteredSpot_room.properties.id}
                    >
                      {filteredSpot_room.properties.room}
                    </div>
                  ))
                }
              />
            ))
          }
        />
      ))}
    </div>
  );
}
