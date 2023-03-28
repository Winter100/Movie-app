import VideoPlayer from "./VideoPlayer";

import style from "./MovieDetail-item.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieDetailItem({ item, setIsCommnet }) {
  const imgbase = "https://image.tmdb.org/t/p/w300";

  const [isVideo, setIsVideo] = useState(false);
  let VideosKey = item.videos;

  const title = item.title ? item.title : "타이틀 정보가 없습니다";

  const genres = item.genres
    ? item.genres.map((item) => `${item.name} / `)
    : "장르 정보가 없습니다";

  const overview = item.overview ? item.overview : "줄거리 정보가 없습니다";

  const poster = item.poster_path
    ? imgbase + item.poster_path
    : "포스터 정보가 없습니다";

  if (VideosKey.results.length === 0) {
    VideosKey = false;
  }

  const navigate = useNavigate();

  return (
    <>
      {isVideo && <VideoPlayer video={VideosKey} setIsVideo={setIsVideo} />}
      <div className={style.movieDetailAll}>
        <div className={style.movieDetailDiv}>
          <img
            onClick={() => setIsVideo((is) => !is)}
            src={poster}
            alt={item.title}
            className={style.movieDetailImg}
          />
          <div className={style.movieDetailheaderdiv}>
            <header className={style.movieDetailTitle}>{title}</header>
            <p className={style.movieDetailEx}>
              (포스터 클릭시 예고편이 재생됩니다)
            </p>
            <p className={style.movieDetailGenres}>{genres}</p>
            <div style={{ color: "red" }} className={style.movieDetailstory}>
              줄거리
            </div>
            <p className={style.movieDetailOverView}>{overview}</p>
            <footer className={style.MovieDetailFooter}>
              <button onClick={() => navigate(-1)}>{"뒤로"}</button>
              <button onClick={() => setIsCommnet((is) => !is)}>
                {"댓글"}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailItem;
