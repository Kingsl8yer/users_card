import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`}> {/* This is how you can add multiple classes to a component */}
            {props.children}
        </div>
    )
};

export default Card;