import { redirect } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export async function action() {
  localStorage.removeItem("movie-token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("movie-name");

  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }

  return redirect("/");
}
