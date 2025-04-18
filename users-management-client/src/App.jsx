import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers os users: {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" name="Add User" id="" /> <br />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name} : {user.email}{" "}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
