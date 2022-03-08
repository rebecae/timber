import React from "react";
import TinderCard from "react-tinder-card";
import { useState,useEffect } from "react";
import "./TinderCards.css";
import { IoInformationCircle } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import database from "./db";

function TinderCards() {
  let navigate = useNavigate();
  const [places, setPlace] = useState([]);

  // Iterating through firestore database and storing in array
  useEffect(() => {
    database.collection('places').onSnapshot(snapshot => (
      setPlace(snapshot.docs.map(doc => doc.data()))
    ))
    // console.log({places});
  }, []);

  return (
    <div>
      <div className="card-container">
        {/* Making Tinder card for each location in database array */}
        {places.map((place) => (
          <TinderCard
            className="swipe"
            key={place.loc}
            preventSwipe={["up, down"]}
          >
            <div
              style={{ backgroundImage: `url(${place.url})` }}
              className="card"
            >
              <h3>
                <span className="place-name">{place.loc}</span>
                {/* clickable information button */}
                <button
                  className="i-button"
                  onClick={() => {
                    navigate(`${place.link}`);
                  }}
                >
                  <IconContext.Provider value={{ color: "white", style: { verticalAlign: 'bottom'}}}>
                    <IoInformationCircle style={{ height: 20, width: 20 }} />
                  </IconContext.Provider>
                </button>
                <br />
                {/* distance info w/ icon */}
                <IconContext.Provider value={{ color: "white" }}>
                    <IoLocationSharp style={{ height: 10, width: 10 }} />
                </IconContext.Provider>
                <span className="distance">{place.dis} miles away</span>
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
