import MovieItem from "../components/MovieItem";

import { json } from "react-router-dom";
import { API } from "../util/api";

function GenresPage() {
  return <h1>g</h1>;
}

export default GenresPage;

export async function loader({ request }) {
  // const searchParams = new URL(request.url).searchParams;
  // const page = searchParams.get("page");

  const GenresUrl = `
  https://api.themoviedb.org/3/search/multi?api_key=${API}&language=ko-KR&query=${""}&page=1&include_adult=false`;

  const response = await fetch(GenresUrl);

  if (!response.ok) {
    throw json(
      { message: "서버와 통신중 에러가 발생했습니다" },
      { status: 500 }
    );
  }

  const data = await response.json();
  console.log("g", data);

  return data;
}
