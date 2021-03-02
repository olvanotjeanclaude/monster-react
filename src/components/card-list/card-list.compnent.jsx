import React from "react";
import "./card-list.style.css";
import { Card } from "../Card/card.component.jsx";
export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monster.map((monster) => (
                // console.log(monster)
                <Card key={monster.id} monster={monster}></Card>
            ))}
        </div>
    );
};
