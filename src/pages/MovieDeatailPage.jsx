import { json, useLoaderData } from "react-router-dom";
import MovieDetailItem from "../components/MovieDetail-Item";
import { API } from "../util/api";

function MovieDetailPage() {
  const data = useLoaderData();

  return <MovieDetailItem item={data} />;
}

export default MovieDetailPage;

export async function loader({ params }) {
  const movieId = params.id;

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&language=ko-KR&append_to_response=videos,images`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw json({ message: "다시 시도 해주세요" }, { status: 500 });
  }

  const resData = await response.json();

  const Data = resData;

  return Data;
}
