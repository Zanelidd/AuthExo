import { NavLink, useNavigate } from "react-router-dom";
import style from "./styles/Header.module.css";
import axios from "axios";

export default function Header() {

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/logout`,document.cookie, {
        withCredentials: true,
      })
      .then((reponse) => {
        if (reponse.status === 200) {
          localStorage.clear();
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/");
        } else {
          console.log("Users not disconnected");
        }
      });
  };
  return (
    <nav className={style.navbarContainer}>
      <div className={style.linkContainer}>
        <NavLink to="/Users">Users</NavLink>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
