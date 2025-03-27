import React, { useState } from "react";

const UserInput = () => {
  const [users, setUsers] = useState([""]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (name.trim() !== "" && email.trim() !== "") {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          name,
          email,
        },
      ]);
      setName("");
      setEmail("");
    }
  };
  console.log(typeof users);

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>

      <label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>

      <button onClick={addUser}>AddUser</button>
      <ul>
        {users.map((list) => (
          <li key={list.id}>
            {list.name} - {list.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInput;
