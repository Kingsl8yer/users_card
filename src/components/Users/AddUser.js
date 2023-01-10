import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = React.useState('');
    const [enteredAge, setEnteredAge] = React.useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); // Prevents the page from reloading when the form is submitted (default behavior)
        console.log(enteredUsername, enteredAge);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};
export default AddUser;
