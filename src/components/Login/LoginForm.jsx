import { Form, Link, useActionData } from "react-router-dom";
import style from "./LoginForm.module.css";
import useInput from "../../hooks/use-input";
function LoginForm() {
  const errors = useActionData();

  const {
    onChangeValue: emailOnChangeValue,
    onBlur: emailOnBlur,
    itIs: emailItIs,
    valueIsValid: emailValueIsValid,
  } = useInput((value) => value.trim().includes("@") && value.trim() !== "");
  const {
    onChangeValue: passwordOnChangeValue,
    onBlur: passwordOnBlur,
    itIs: passwordItIs,
    valueIsValid: passwordValueIsValid,
  } = useInput((value) => value.trim().length >= 6);

  const emailClassName = emailItIs ? style.authFormInput : "";
  const passwordClassName = passwordItIs ? style.authFormInput : "";

  let buttonDisabled = false;

  if (emailValueIsValid && passwordValueIsValid) {
    buttonDisabled = true;
  }

  return (
    <section className={style.auth}>
      <h2 className={style.header}>로그인</h2>
      <div className={style.loginFormerrors}>
        {errors?.email && <span>{errors.email}</span>}
        {errors?.password && <span>{errors.password}</span>}
        {errors?.message && <span>{errors.message}</span>}
      </div>
      <Form method="POST">
        <div className="form-floating mb-3">
          <input
            onChange={emailOnChangeValue}
            onBlur={emailOnBlur}
            type="email"
            className="form-control"
            id="email"
            placeholder="ABC@ABC.com"
            name="email"
            required
          />
          <label htmlFor="email" className={emailClassName}>
            {!emailItIs ? "E-mail" : "E-mail은 @가 포함되어야 합니다"}{" "}
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={passwordOnChangeValue}
            onBlur={passwordOnBlur}
            type="password"
            className="form-control"
            id="password"
            placeholder="비밀번호"
            name="password"
            minLength="6"
            required
          />
          <label htmlFor="password" className={passwordClassName}>
            {!passwordItIs ? "비밀번호" : "비밀번호는 6자 이상입니다"}
          </label>
        </div>
        <div className={style.loginBtnDiv}>
          <button
            disabled={!buttonDisabled}
            type="submit"
            className="btn btn-primary btn-lg"
          >
            로그인
          </button>
          <Link to={"/auth"}>
            <button type="submit" className="btn btn-primary btn-lg">
              회원가입
            </button>
          </Link>
        </div>
      </Form>
    </section>
  );
}

export default LoginForm;
