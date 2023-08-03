import { useState } from "react";
import style from "./styles/Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/");
          }, 500);
        }else{
          console.log("User Not registered")
        }
      });
  };
  
  return (
    <>
      <div className={style.registerContainer}>
        <h1>Créer un compte : </h1>
        <form
          action="submit"
          className={style.formContainer}
          onSubmit={onSubmit}
        >
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
      ;
    </>
  );
}
