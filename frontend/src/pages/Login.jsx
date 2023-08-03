import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./styles/Login.module.css";
import { useContext, useState } from "react";
import userContext from "../contexts/userContext";

export default function Login() {
  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status == 200){

          setUser(response.data);
          setTimeout(() => {
            navigate("/users");
          }, 500);
        }
      });
  };

  return (
    <div className={style.loginContainer}>
      <h1>Connectez-vous : </h1>
      <form action="submit" className={style.formContainer} onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
      </form>

      <label htmlFor="register">
        <Link to="/register"> Register</Link>
      </label>
    </div>
  );
}
