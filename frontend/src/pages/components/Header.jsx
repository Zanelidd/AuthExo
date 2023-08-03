import { NavLink, useNavigate } from "react-router-dom";
import style from "./styles/Header.module.css";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then((reponse) => {
        if (reponse.status === 200) {
          localStorage.clear();
          document.cookies =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/");
        } else {
          console.log("Users not disconnected");
        }
      });
  };
  return (
    <nav className={style.navbarContainer}>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/Users">Users</NavLink>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
