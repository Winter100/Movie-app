import { Form, useNavigation } from "react-router-dom";
import Spinner from "../../assets/Spinner.gif";
import style from "./AuthForm.module.css";

function AuthForm() {
  const navigation = useNavigation();
  const isLoadding = navigation.state === "submitting";

  return (
    <section className={style.auth}>
      <h2 className={style.header}>회원가입</h2>
      <div className={style.loginFormerrors}></div>
      {isLoadding ? (
        <div className={style.loginImg}>
          <img src={Spinner} alt={"Loading"} />
        </div>
      ) : (
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
              type="input"
              className="form-control"
              id="name"
              placeholder="닉네임"
              name="name"
              required
            />
            <label htmlFor="name">닉네임</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              required
            />
            <label htmlFor="password">비밀번호</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password-ok"
              placeholder="Password"
              required
            />
            <label htmlFor="password-ok">비밀번호 확인</label>
          </div>
          <button
            disabled={isLoadding}
            type="submit"
            className="btn btn-primary btn-lg"
          >
            {!isLoadding ? "가입" : "가입중..."}
          </button>
        </Form>
      )}
    </section>
  );
}

export default AuthForm;
