import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
        }); // This is how you can add a new item to a list of items in state (using the spread operator)
    }
  return (
    <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
    </div>
  );
}
export default App;
