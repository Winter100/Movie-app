import { redirect } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("실패", errorCode, errorMessage);
    });

  return redirect("/");
}
