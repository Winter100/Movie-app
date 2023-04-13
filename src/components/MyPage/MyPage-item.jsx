import style from "./MyPage-item.module.css";
import useInput from "../../hooks/use-input";
import { Form } from "react-router-dom";
import React, { useMemo } from "react";

function MyItem({ authData }) {
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

  const btndisabled = !(passwordValueIsValid && password2ValueIsValid);

  const passWordClassName = useMemo(
    () => (passwordItIs ? style.myItempas : ""),
    [passwordItIs]
  );
  const passWord2ClassName = useMemo(
    () => (!password2ValueIsValid ? style.myItempas : ""),
    [password2ValueIsValid]
  );

  return (
    <div className={style.myItemOut}>
      <h2>마이페이지</h2>
      <section className={style.myItemSection}>
        <div>
          <label htmlFor="email" className={style.myItemLabel}>
            E-mail
          </label>
          <p id="email" className={style.myItemP}>
            {authData?.email || "?"}
          </p>
        </div>
        <div>
          <label htmlFor="displayName" className={style.myItemLabel}>
            닉네임
          </label>
          <p id="displayName" className={style.myItemP}>
            {authData?.displayName || "?"}
          </p>
        </div>
        <div className={style.myItempassForm}>
          <h4>비밀번호 변경</h4>
          <Form method="post">
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
                {!passwordItIs
                  ? "변경할 비밀번호"
                  : "비밀번호는 6자 이상입니다"}
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
                {password2ValueIsValid
                  ? "비밀번호 확인"
                  : "비밀번호가 다릅니다"}
              </label>
            </div>
            <button
              disabled={btndisabled}
              type="submit"
              className="btn btn-primary btn-lg"
            >
              비밀번호 변경
            </button>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default React.memo(MyItem);
