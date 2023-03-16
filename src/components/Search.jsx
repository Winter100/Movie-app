import style from "./Search.module.css";

function Search() {
  return (
    <form className={style.searchForm}>
      <div className={style.searchDiv}>
        <input
          name="q"
          type={"search"}
          className={style.searchInput}
          placeholder={"검색어를 입력해주세요"}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
    </form>
  );
}

export default Search;
