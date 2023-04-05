import { Form, useActionData, useNavigation } from "react-router-dom";
import Spinner from "../../assets/Spinner.gif";
import style from "./AuthForm.module.css";
import useInput from "../../hooks/use-input";

function AuthForm() {
  const navigation = useNavigation();
  const isLoadding = navigation.state === "submitting";
  const errors = useActionData();

  const {
    onChangeValue: emailOnChangeValue,
    onBlur: emailOnBlur,
    itIs: emailItIs,
    valueIsValid: emailValueIsValid,
  } = useInput((value) => value.trim().includes("@") && value.trim() !== "");
  const {
    onChangeValue: nameOnChangeValue,
    onBlur: nameOnBlur,
    itIs: nameItIs,
    valueIsValid: nameValueIsValid,
  } = useInput((value) => value.trim() !== "");
  const {
    onChangeValue: passwordOnChangeValue,
    onBlur: passwordnBlur,
    itIs: passwordItIs,
    valueIsValid: passwordValueIsValid,
    enteredValue,
  } = useInput((value) => value.trim().length >= 6);
  const {
    onChangeValue: passwordOnChangeValue2,
    onBlur: passwordnBlur2,
    valueIsValid: password2ValueIsValid,
  } = useInput((value) => enteredValue === value);

  let buttonDisabled = false;

  if (
    emailValueIsValid &&
    nameValueIsValid &&
    passwordValueIsValid &&
    password2ValueIsValid
  ) {
    buttonDisabled = true;
  }

  const emailClassName = emailItIs ? style.authFormInput : "";
  const nameClassName = nameItIs ? style.authFormInput : "";
  const passWordClassName = passwordItIs ? style.authFormInput : "";
  const passWord2ClassName = !password2ValueIsValid ? style.authFormInput : "";

  return (
    <section className={style.auth}>
      <h2 className={style.header}>회원가입</h2>
      <div className={style.loginFormerrors}>
        {errors?.email && <span>{errors.email}</span>}
        {errors?.displayName && <span>{errors.displayName}</span>}
        {errors?.password && <span>{errors.password}</span>}
      </div>
      {isLoadding ? (
        <div className={style.loginImg}>
          <img src={Spinner} alt={"Loading"} />
        </div>
      ) : (
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
              {!emailItIs ? "E-mail" : "E-mail은 @가 포함되어야 합니다"}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={nameOnChangeValue}
              onBlur={nameOnBlur}
              type="input"
              className="form-control"
              id="name"
              placeholder="닉네임"
              name="name"
              required
            />
            <label htmlFor="name" className={nameClassName}>
              {!nameItIs ? "닉네임" : "닉네임을 적어주세요"}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={passwordOnChangeValue}
              onBlur={passwordnBlur}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              minLength="6"
              required
            />
            <label htmlFor="password" className={passWordClassName}>
              {!passwordItIs ? "비밀번호" : "비밀번호는 6자 이상입니다"}
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={passwordOnChangeValue2}
              onBlur={passwordnBlur2}
              type="password"
              className="form-control"
              id="password-ok"
              placeholder="Password"
              required
            />
            <label htmlFor="password-ok" className={passWord2ClassName}>
              {password2ValueIsValid ? "비밀번호 확인" : "비밀번호가 다릅니다"}
            </label>
          </div>
          <div className={style.authFormBtnDiv}>
            <button
              disabled={!buttonDisabled}
              type="submit"
              className="btn btn-primary btn-lg"
            >
              {!isLoadding ? "가입" : "가입중..."}
            </button>
          </div>
        </Form>
      )}
    </section>
  );
}

export default AuthForm;
