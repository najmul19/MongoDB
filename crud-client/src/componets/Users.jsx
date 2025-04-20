import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [curentUsers, setCurrentUsers] = useState(users);
  const handleDeleteUser = (id) => {
    // console.log("delete", id)
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted successfully");
          const remaining = curentUsers.filter((user) => user._id !== id);
          setCurrentUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2>{curentUsers.length}</h2>
      <div>
        {curentUsers.map((user) => (
          <p key={user._id}>
            {" "}
            {user.name} : {user.email} {user._id}{" "}
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
