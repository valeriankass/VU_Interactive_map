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

  //Shortcut used b/c building is not nested
  const buildings = studySpots_State.map(spot => spot.properties.building);
  //In case of Floors we have to remember that two buildings can have the same floor
  //and both buildings should display their floor.

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
          title={"Building: " + filteredSpot_building.properties.building}
          body={
            studySpots_State.filter(spot_floor => (
              spot_floor.properties.building === filteredSpot_building.properties.building
            ))//Returns array of spots at current building
            .filter((item, index) => (
              studySpots_State.filter(spot_floor => (
                spot_floor.properties.building === filteredSpot_building.properties.building
              ))//Returns array of spots at current building
              //Transforms spot object to floor string
              .map(item => item.properties.floor)
              //Uses array of floor strings as basis
              //Finds first element of floor string value
              //Checks whether the parent (of floor string) spot has been seen before
              //Effect: Eliminates duplicates
              .indexOf(item.properties.floor) === index
            ))
            .map((filteredSpot_floor) => (
              <Accordion //Floor
                key={filteredSpot_floor.properties.id}
                type={"floor"}
                index={filteredSpot_floor.properties.id}
                open={filteredSpot_floor.metadata.open_floor}
                toggleStudySpot={toggleStudySpot}
                title={"Floor: " + filteredSpot_floor.properties.floor}
                body={
                  studySpots_State.filter((spot_room) => (
                    spot_room.properties.floor === filteredSpot_floor.properties.floor &&
                    spot_room.properties.building === filteredSpot_floor.properties.building
                  )).map((filteredSpot_room) => (
                    <div
                      className="accordionless_body"
                      key={filteredSpot_room.properties.id}
                    >
                      {"Room: " + filteredSpot_room.properties.room}
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

//todo: automatic sorting of floors
