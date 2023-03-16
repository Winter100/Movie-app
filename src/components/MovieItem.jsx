import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";

function MovieItem({ item }) {
  const imgbase = "https://image.tmdb.org/t/p/w200";
  return (
    <div>
      <ul className={style.movieItemUl}>
        {item.map((item) => (
          <li key={item.id} className={style.movieItemLi}>
            <header className={style.movieItemTitle}>{item.title}</header>
            <Link to={"/movies/detail/" + item.id}>
              <img
                className={style.movieItemImg}
                src={imgbase + item.poster_path}
                alt={item.title}
              />
            </Link>
            <p className={style.movieItemAverage}>평점: {item.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieItem;
