import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={style.mainNavHeader}>
      <ul className={style.mainNavUl}>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            개봉예정영화
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/movies/films?page=1"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            영화
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/tv-show"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Tv
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
