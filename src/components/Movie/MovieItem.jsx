import { Link } from "react-router-dom";
import { imgbase } from "../../util/url";
import style from "./MovieItem.module.css";
import React from "react";

function MovieItem({ item, message = "평점" }) {
  return (
    <div className={style.movieItemDdiv}>
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
            <p className={style.movieItemAverage}>
              {message === "개봉일"
                ? `${message} : ${item.release_date}`
                : `${message} : ${item.vote_average}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(MovieItem);
