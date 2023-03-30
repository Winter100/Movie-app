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
            홈
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/movies"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            영화
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/auth"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            가입
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
