import { redirect, useLoaderData } from "react-router-dom";
import MyItem from "../components/MyPage/MyPage-item";
import { getAuth, updatePassword } from "firebase/auth";
import { getAuthToken } from "../util/auth-util";
import { auth } from "../firebase";
import React from "react";

function MyPage() {
  const authData = useLoaderData();

  return <MyItem authData={authData} />;
}

export default React.memo(MyPage);

export async function loader() {
  const token = getAuthToken();

  if (!token) return redirect("/login");

  const user = auth.currentUser;

  if (!user) {
    const authData = {
      email: localStorage.getItem("movie-email"),
      displayName: localStorage.getItem("movie-name"),
    };
    return authData;
  }

  return user;
}

export async function action({ request }) {
  const data = await request.formData();
  const password = data.get("password");

  const auth = getAuth();
  const user = auth.currentUser;

  updatePassword(user, password)
    .then(() => {})
    .catch((error) => {});

  return redirect("/");
}
