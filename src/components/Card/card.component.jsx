import React from "react";
import "./card.style.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
                alt="monster    "
            />
            <h3> {props.monster.name}</h3>
            <h4> {props.monster.email} </h4>
        </div>
    );
};
