import style from "./SearchResultList.module.css";

function SearchResultList({ data }) {
  console.log(data);

  const imgbase = "https://image.tmdb.org/t/p/w200";

  return (
    <div className={style.resultListBorder}>
      <header className={style.resultListHeader}>
        <h2>xxx로 검색한 결과</h2>
      </header>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={style.resultListLi}>
            <div className={style.resultListInDiv}>
              <img src={imgbase + item.poster_path} alt={item.id} />
              <p>{item.title}</p>
              <p>설명</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultList;
