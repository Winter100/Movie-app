import { redirect } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export async function action({ request }) {
  const getValue = await request.formData();

  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      email: getValue.get("email"),
      displayName: getValue.get("name"),
      password: getValue.get("password"),
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("에러");
  }

  // const data = await response.json();

  return redirect("/");
}
