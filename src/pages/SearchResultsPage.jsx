import { json, useLoaderData } from "react-router-dom";
import SearchResultList from "../components/SearchResultList";
function SearchResultsPage() {
  const data = useLoaderData();

  return <SearchResultList data={data.results} />;
}

export default SearchResultsPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const searchData = searchParams.get("searchvalue");

  const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.REACT_APP_TMDB_API_KEY
  }&language=ko-KR&query=${searchData}&page=${"1"}&include_adult=true`;

  const response = await fetch(SearchUrl);

  if (!response.ok) {
    throw json({ message: "잠시후 다시 시도해주세요" }, { status: 500 });
  }

  const data = await response.json();

  return data;
}
