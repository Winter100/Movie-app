import { useState } from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import CommentInput from "../components/Comment/Comment-Input";
import CommentOutPut from "../components/Comment/Comment-Output";
import MovieDetailItem from "../components/Movie/MovieDetail-Item";

import { getAuth, getIdToken } from "firebase/auth";
import { getDatabase, ref, push, remove } from "firebase/database";

function MovieDetailPage() {
  const { data, comment } = useLoaderData();
  const [isCommnet, setIsCommnet] = useState(false);

  return (
    <>
      <MovieDetailItem item={data} setIsCommnet={setIsCommnet} />
      {isCommnet ? (
        <>
          <CommentOutPut item={comment} met="DELETE" />
          <CommentInput setIsCommnet={setIsCommnet} met="PUT" />
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
  const COMMNET_URL = `${process.env.REACT_APP_FIREBASE_URL}${movieId}/comments.json`;

  const headers = {
    "Content-Type": "application/json",
  };

  const response = await fetch(URL);
  const commentResponse = await fetch(COMMNET_URL, {
    headers: headers,
  });

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
  const movieId = params.id;
  const method = request.method;
  const getValue = await request.formData();

  const auth = getAuth();
  const db = getDatabase();

  const { currentUser } = auth;

  if (!currentUser.accessToken) {
    return null;
  }

  const token = await getIdToken(currentUser, true);

  // "comments" 컬렉션 댓글 삭제
  if (method === "DELETE") {
    const key = getValue.get("key");
    const commentsDeleteRef = ref(db, `comment/${movieId}/comments/${key}`);

    await remove(commentsDeleteRef, token)
      .then((res) => {})
      .catch((err) => {
        return redirect(`/login`);
      });

    return redirect(`/movies/detail/${movieId}`);
  }

  // "comments" 컬렉션에 새로운 댓글 추가
  if (method === "PUT") {
    const errors = {};
    const content = getValue.get("value");

    if (content.length < 1) {
      errors.content = "내용을 적어주세요!";
    }

    if (Object.keys(errors).length) {
      return errors;
    }

    const commentsRef = ref(db, `comment/${movieId}/comments`);

    const today = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };

    const commentData = {
      name: currentUser.displayName,
      content: getValue.get("value"),
      createdAt: `${today.year}-${today.month}-${today.day}`,
      userId: auth.currentUser.uid,
    };

    await push(commentsRef, commentData, token)
      .then((res) => {})
      .catch((err) => {
        return redirect(`/login`);
      });

    return redirect(`/movies/detail/${movieId}`);
  }

  return redirect(`/`);
}
