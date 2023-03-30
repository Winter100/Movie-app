import { json, useLoaderData } from "react-router-dom";
import SearchResultList from "../components/Search/SearchResultList";
function SearchResultsPage() {
  const data = useLoaderData();

  return <SearchResultList data={data.results} />;
}

export default SearchResultsPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const searchData = searchParams.get("searchvalue");

  // const SearchUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${process.env.REACT_APP_KMDB_API_KEY}&query=${searchData}&title`;

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
