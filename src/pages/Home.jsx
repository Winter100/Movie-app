import { json, useLoaderData } from "react-router-dom";
import HomeItem from "../components/Home/HomeItem";

function HomePage() {
  const data = useLoaderData();

  return (
    <>
      <HomeItem item={data.results} />
    </>
  );
}

export default HomePage;

export async function loader() {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw json({ message: "다시 시도해주세요" }, { status: 500 });
  }

  const data = await response.json();

  return data;
}
