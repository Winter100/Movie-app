import { Form, NavLink, useSubmit } from "react-router-dom";
import style from "./DropDown.module.css";
import { getAuthName, getAuthToken } from "../../util/auth-util";

function DropDown({ setDropDownMenu }) {
  const token = getAuthToken();
  const name = getAuthName();

  const submit = useSubmit();

  return (
    <div className={style.dropDownDiv}>
      <div className={style.dropDownBtn}>
        <button onClick={() => setDropDownMenu((is) => !is)}>X</button>
      </div>
      <div className={style.dropDownOut}>
        <header className={style.dropDownHeader}>
          <h2>메뉴</h2>
          {name && <span>{`환영합니다 ${name}님`}</span>}
        </header>
        <section className={style.dropDownsection}>
          <ul className={style.dropDownBody}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/movies"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                영화
              </NavLink>
            </li>
            {token && (
              <li>
                <NavLink
                  to={"/wishlist"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  찜 목록
                </NavLink>
              </li>
            )}
          </ul>
        </section>
        <footer className={style.dropDownFooter}>
          <ul className={style.dropDownBody}>
            {token ? (
              <li>
                <NavLink
                  to={"/mypage"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  My
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  로그인
                </NavLink>
              </li>
            )}
            {token ? (
              <li>
                <Form
                  onClick={() =>
                    submit(null, { method: "post", action: "/logout" })
                  }
                >
                  Logout
                </Form>
              </li>
            ) : (
              <li>
                <NavLink
                  to={"/auth"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  회원가입
                </NavLink>
              </li>
            )}
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default DropDown;
