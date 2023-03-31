import { json, redirect } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export async function action({ request }) {
  const getValue = await request.formData();

  const email = getValue.get("email");
  const name = getValue.get("name");
  const password = getValue.get("password");

  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`;
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
      returnSecureToken: true,
    }),
  });

  if (!response.ok) {
    throw json({ message: "가입 실패" }, { status: 500 });
  }

  // const data = await response.json();

  return redirect("/");
}
