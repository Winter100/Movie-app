import style from "./SearchResultList.module.css";
import { Link, useSearchParams } from "react-router-dom";

function SearchResultList({ data }) {
  console.log(data);

  const [searchParams] = useSearchParams();

  const paramsValue = searchParams.get("searchvalue");

  const imgbase = "https://image.tmdb.org/t/p/w200";

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
                  <p className={style.resultListP}>{item.overview}</p>
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
