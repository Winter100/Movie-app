import { useState } from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import CommentInput from "../components/Comment/Comment-Input";
import CommentOutPut from "../components/Comment/Comment-Output";
import MovieDetailItem from "../components/Movie/MovieDetail-Item";

function MovieDetailPage() {
  const { data, comment } = useLoaderData();
  const [isCommnet, setIsCommnet] = useState(false);

  return (
    <>
      <MovieDetailItem item={data} setIsCommnet={setIsCommnet} />

      {isCommnet ? (
        <>
          <CommentOutPut item={comment} />
          <CommentInput setIsCommnet={setIsCommnet} />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieDetailPage;

export async function loader({ params }) {
  const movieId = params.id;

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&append_to_response=videos,images`;
  const COMMNET_URL = `${process.env.REACT_APP_FIREBASE_URL}${movieId}.json`;

  const response = await fetch(URL);
  const commentResponse = await fetch(COMMNET_URL);

  if (!response.ok) {
    throw json({ message: "다시 시도 해주세요" }, { status: 500 });
  }

  const resData = await response.json();
  const commnetData = await commentResponse.json();

  const Data = {
    data: resData,
    comment: commnetData,
  };

  return Data;
}

export async function action({ request, params }) {
  const id = params.id;
  const getValue = await request.formData();

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  const commentData = {
    name: getValue.get("name"),
    password: getValue.get("password"),
    value: getValue.get("value"),
    date: `${today.year}-${today.month}-${today.day}`,
  };

  const URL = `${process.env.REACT_APP_FIREBASE_URL}${id}.json`;
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw json({ message: "저장 실패" }, { status: 500 });
  }

  return redirect(`/movies/detail/${id}`);
}
