import { json, redirect } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;

export async function action({ request }) {
  const loginValue = await request.formData();

  const email = loginValue.get("email");
  const password = loginValue.get("password");

  const errors = {};

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "이메일은 @가 포함되어야 합니다";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "비밀번호는 최소 6글자 이상입니다";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`;

  const response = await fetch(loginURL, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "로그인에 실패하였습니다" }, { status: 500 });
  }

  const res = await response.json();
  console.log("성공", res);

  return redirect("/");
}
