import { NavLink } from "react-router-dom";
import style from "./MovieNavigation.module.css";
function MovieNavigation() {
  return (
    <header className={style.mainNavHeader}>
      <ul className={style.mainNavUl}>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/movies?page=1"}
            end
            className={({ isActive }) => (isActive ? style.actives : "")}
          >
            개봉예정
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            end
            to={"/movies/popular?page=1"}
            className={({ isActive }) => (isActive ? style.actives : "")}
          >
            인기영화
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/movies/toprated?page=1"}
            className={({ isActive }) => (isActive ? style.actives : "")}
          >
            인생영화
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default MovieNavigation;
