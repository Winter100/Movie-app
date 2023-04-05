import { redirect } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export async function action({ request }) {
  const getValue = await request.formData();

  const email = getValue.get("email");
  const password = getValue.get("password");
  const displayName = getValue.get("name");

  const errors = {};

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "올바른 E-mail 형식이 아닙니다";
  }

  if (typeof displayName !== "string" || displayName.length < 1) {
    errors.displayName = "닉네임을 적어주세요";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "비밀번호는 6자 이상이어야합니다";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log("errorCode:", errorCode);
      // console.log("errorMessage:", errorMessage);
    });

  await updateProfile(auth.currentUser, {
    displayName: displayName,
  })
    .then(() => {})
    .catch(() => {});

  return redirect("/");
}
