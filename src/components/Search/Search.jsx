import style from "./Search.module.css";

import { Form } from "react-router-dom";

function Search() {
  return (
    <Form className={style.searchForm} action={"/resultes"}>
      <div className={style.searchDiv}>
        <input
          type="search"
          name="searchvalue"
          className={style.searchInput}
          required
          placeholder={"검색어를 입력해주세요"}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
    </Form>
  );
}

export default Search;
