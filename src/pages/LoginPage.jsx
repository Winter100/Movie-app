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

  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("movie-token", user.accessToken);
      localStorage.setItem("movie-name", user.displayName);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());
    })
    .catch((error) => {
      if (error.code === "auth/wrong-password") {
        errors.password = "비밀번호가 틀렸습니다";
      } else if (error.code === "auth/user-not-found") {
        errors.email = "해당 이메일로 등록된 계정이 없습니다";
      }
    });

  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/");
}
