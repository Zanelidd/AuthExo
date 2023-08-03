import axios from "axios";
import { useEffect, useState } from "react";
import style from "./styles/Users.module.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        withCredentials: true,
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className={style.usersContainer}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p >{user.username}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}
