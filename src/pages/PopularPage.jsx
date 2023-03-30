import { json, useLoaderData, useSearchParams } from "react-router-dom";
import MovieItem from "../components/Movie/MovieItem";

import Pagination from "react-js-pagination";
import "./Paging.css";
import { useEffect, useState } from "react";

function PopularPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page"));
  const movies = useLoaderData();
  const [page, setPage] = useState(paramsPage);

  useEffect(() => {
    setPage(paramsPage);
  }, [paramsPage, page]);

  const handlePageChange = (page) => {
    setSearchParams(`page=${page}`);
    setPage(page);
  };

  return (
    <>
      <MovieItem item={movies.results} />
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={10000}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}

export default PopularPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page");

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=${page}`;

  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기

  const response = await fetch(popularUrl);

  if (!response.ok) {
    throw json(
      { message: "서버와 통신중 오류가 발생했습니다" },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data;
  }
}
