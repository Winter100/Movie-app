import MovieItem from "../components/MovieItem";

import { json, useLoaderData, useSearchParams } from "react-router-dom";
import { API } from "../util/api";
import { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

function TopRatedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page"));
  const topRatedMovies = useLoaderData();
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
      <MovieItem item={topRatedMovies.results} />
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

export default TopRatedPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page");

  const GenresUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=ko-KR&page=${page}`;

  const response = await fetch(GenresUrl);

  if (!response.ok) {
    throw json(
      { message: "서버와 통신중 에러가 발생했습니다" },
      { status: 500 }
    );
  }

  const data = await response.json();
  console.log("GenresUrl", data);

  return data;
}
