import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "./Map.css"
import mapStyles from "../../data/json/mapStyles";
import * as studySpots from "../../data/json/study-spots.json";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
  marginRight: "auto",
  marginLeft: "auto",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  gestureHandling: "cooperative",
};
const center = {
  lat: 52.333642,
  lng: 4.865137,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBOPoCSq_s1IpyGFhnuh1tzCznUVeFsHhE",
    libraries,
  });

  const [selectedSpot, setSelectedSpot] = React.useState(null);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        VU Study Spots &nbsp;
        <span role="img" aria-label="university">
          🏫
        </span>
      </h1>

      <div className="mapContainer">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={window.innerWidth > 768 ? 18 : 16}
          options={options}
          center={center}
          onClick={() => {
            setSelectedSpot(null);
          }}
        >
          {studySpots.features.map((spot) => (
            <Marker
              key={spot.properties.id}
              position={{
                lat: spot.geometry.coordinates[0],
                lng: spot.geometry.coordinates[1]
              }}
              onClick={() => {
                setSelectedSpot(spot);
              }}
              icon={{
                url: 'https://image.flaticon.com/icons/svg/2232/2232688.svg',
                scaledSize: new window.google.maps.Size(35, 35)
              }}
            />
          ))}

          {selectedSpot ? (
            <InfoWindow
              position={{
                lat: selectedSpot.geometry.coordinates[0],
                lng: selectedSpot.geometry.coordinates[1]
              }}
              onCloseClick={() => {
                setSelectedSpot(null);
              }}
            >
              <div
                id="InfoWindow"
              >
                <p className="loc">
                  Room: {selectedSpot.properties.room}
                </p>
                <p className="loc">
                  Floor: {selectedSpot.properties.floor}
                </p>
                <p className="loc">
                  Building: {selectedSpot.properties.building}
                </p>
                <p className={selectedSpot.properties.availableSpots ? "availSpots" : "notAvail"}>
                  {selectedSpot.properties.availableSpots ? "Free spots are available!" : "No free spots at the moment."}
                </p>
                <p className={selectedSpot.properties.electricityPlugs ? "availSpots" : "notAvail"}>
                  {selectedSpot.properties.electricityPlugs ? "Power sockets are available!" : "There are no power sockets here."}
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}
