import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={classes.button}
                type={props.type || 'button'} // If no type is specified, the default type is button (this is a fallback)
                onClick={props.onClick}> {/* This is how you can add an event listener to a component */}
            {props.children}
        </button>
    );
}

export default Button;
