import { redirect } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export async function action() {
  localStorage.clear();

  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {}

  return redirect("/");
}
