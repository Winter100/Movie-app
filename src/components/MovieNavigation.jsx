import { NavLink } from "react-router-dom";
import style from "./MovieNavigation.module.css";
function MovieNavigation() {
  return (
    <header className={style.mainNavHeader}>
      <ul className={style.mainNavUl}>
        <li className={style.mainNavLi}>
          <NavLink
            end
            to={"/movies/films?page=1"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            개봉예정
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            end
            to={"/movies?page=1"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            인기영화
          </NavLink>
        </li>
        <li className={style.mainNavLi}>
          <NavLink
            to={"/movies/toprated?page=1"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            평점순
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default MovieNavigation;
