// import { Person } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards() {
  const [persons, setPersons] = useState([
    // {
    // name: "A1",
    // picUrl:
    // "https://images.unsplash.com/photo-1585850317957-069f3eb88b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    // },
    // {
    // name: "A2",
    // picUrl:
    // "https://images.unsplash.com/photo-1612117750856-79d6b2ce3998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    // },
  ]);

  useEffect(() => {
    //code runs
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPersons(snapshot.docs.map((doc) => doc.data()))
      );

    //Cleanup
    return () => {
      unsubscribe();
    };
    //this will run ONCE when comp loads and never again
  }, [persons]);
  return (
    <div>
      {/* <h1>Tinder Cards</h1> */}
      <div className="tinderCardContainer">
        {/* <h3>Tinder Cards</h3> */}
        {persons.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.picUrl})` }}
            >
              <h3> {person.name}</h3>
            </div>
          </TinderCard>
        ))}
        {/* <h2>Tinder Cards</h2> */}
      </div>
    </div>
  );
}

export default TinderCards;
