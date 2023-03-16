import {
  json,
  useLoaderData,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { API } from "../util/api";

import Pagination from "react-js-pagination";
import "./Paging.css";
import { useEffect, useState } from "react";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page"));
  const popularMovies = useLoaderData();
  const [page, setPage] = useState(paramsPage);

  useEffect(() => {
    setPage(paramsPage);
  }, [paramsPage, page]);

  // const navigate = useNavigate();

  const handlePageChange = (page) => {
    // navigate(`/movies?page=${page}`);
    setSearchParams(`page=${page}`);
    setPage(page);
  };

  return (
    <>
      <MovieItem item={popularMovies.results} />
      <Pagination
        activePage={page}
        totalItemsCount={1000}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}

export default Movies;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page");

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=ko-KR&page=${page}`;

  const response = await fetch(popularUrl);

  if (!response.ok) {
    throw json(
      { message: "서버와 통신중 에러가 발생했습니다" },
      { status: 500 }
    );
  }

  const data = await response.json();

  return data;
}
