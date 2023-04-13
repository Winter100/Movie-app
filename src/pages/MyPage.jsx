import { redirect, useLoaderData } from "react-router-dom";
import MyItem from "../components/MyPage/MyPage-item";
import { getAuth, updatePassword } from "firebase/auth";
import { getAuthToken } from "../util/auth-util";

function MyPage() {
  const authData = useLoaderData();
  return <MyItem authData={authData} />;
}

export default MyPage;

export async function loader() {
  const token = getAuthToken();
  if (!token) return redirect("/login");

  const auth = getAuth();
  const user = auth.currentUser;

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
