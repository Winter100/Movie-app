import style from "./SearchResultList.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { imgbase } from "../util/url";

function SearchResultList({ data }) {
  const [searchParams] = useSearchParams();

  const paramsValue = searchParams.get("searchvalue");

  return (
    <div className={style.resultListBorder}>
      <header className={style.resultListHeader}>
        <h2 className={style.resultListH}>{`검색어 : "${paramsValue}"`}</h2>
      </header>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={style.resultListLi}>
            <Link
              to={"/movies/detail/" + item.id}
              className={style.resultListLink}
            >
              <div className={style.resultListInDiv}>
                <img
                  src={imgbase + item.poster_path}
                  alt={item.title}
                  className={style.resultImg}
                />
                <div className={style.resultListD}>
                  <h2 className={style.resultTitle}>{item.title}</h2>
                  <p className={style.resultListP}>
                    {item.overview.length < 1
                      ? "줄거리 정보가 없습니다"
                      : item.overview.length > 300
                      ? item.overview.slice(0, 300) + "......."
                      : item.overview}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultList;
