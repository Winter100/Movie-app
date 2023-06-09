import MovieItem from "../components/Movie/MovieItem";

import { json, useLoaderData, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

function ComingPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsPage = Number(searchParams.get("page"));
  const [page, setPage] = useState(paramsPage);

  const data = useLoaderData();

  useEffect(() => {
    if (!paramsPage) {
      setSearchParams(`page=${1}`);
    }
    setPage(paramsPage);
  }, [paramsPage, setSearchParams]);

  const handlePageChange = (page) => {
    setSearchParams(`page=${page}`);
    setPage(page);
  };

  return (
    <>
      <MovieItem item={data.results} message={"개봉일"} />
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={data.total_results}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}

export default ComingPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get("page");

  const comingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=${page}&region=KR`;

  const response = await fetch(comingUrl);

  if (!response.ok) {
    throw json(
      { message: "서버와 통신중 에러가 발생했습니다" },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data;
  }
}
