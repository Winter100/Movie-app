import { Form, useActionData } from "react-router-dom";
import style from "./LoginForm.module.css";
function LoginForm() {
  const errors = useActionData();

  let errMessage = "";

  if (errors?.error.message === "EMAIL_NOT_FOUND") {
    errMessage = "이메일을 찾을 수 없습니다";
  }
  if (errors?.error.message === "INVALID_PASSWORD") {
    errMessage = "비밀번호가 틀렸습니다";
  }

  return (
    <section className={style.auth}>
      <h2 className={style.header}>로그인</h2>
      <div className={style.loginFormerrors}>{errMessage}</div>
      <Form method="POST">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="ABC@ABC.com"
            name="email"
            required
          />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="비밀번호"
            name="password"
            minLength="6"
            required
          />
          <label htmlFor="password">비밀번호</label>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          로그인
        </button>
      </Form>
    </section>
  );
}

export default LoginForm;
