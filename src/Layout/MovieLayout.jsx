import { Outlet } from "react-router-dom";
import MovieNavigation from "../components/Navigation/MovieNavigation";
import style from "./MovieLayout.module.css";
function MovieLayout() {
  return (
    <>
      <MovieNavigation />
      <main className={style.movielayoutMain}>
        <Outlet />
      </main>
    </>
  );
}

export default MovieLayout;
