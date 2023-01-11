import React, {useRef, useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault(); // Prevents the page from reloading when the form is submitted (default behavior)
        const enteredName = nameInputRef.current.value; // This is how you can get the value of an input field using refs
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge); // This is how you can pass data from a child component to a parent component (using props)
        nameInputRef.current.value = ''; // This is how you can set the value of an input field using refs
        ageInputRef.current.value = ''; // This is how you can set the value of an input field using refs
    }


    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && (
                <ErrorModal title={error.title}
                            message={error.message}
                            onConfirm={errorHandler}
                />
            )
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"
                           type="text"
                           ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age"
                           type="number"
                           ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};
export default AddUser;
