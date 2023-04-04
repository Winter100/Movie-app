import { NavLink, Form } from "react-router-dom";
import style from "./DropDown.module.css";
import { getAuthToken } from "../../util/auth-util";
import { useEffect } from "react";
function DropDown({ setDropDownMenu }) {
  const token = getAuthToken();
  useEffect(() => {}, []);

  return (
    <div className={style.dropDownDiv}>
      <div className={style.dropDownBtn}>
        <button onClick={() => setDropDownMenu((is) => !is)}>X</button>
      </div>
      <div className={style.dropDownOut}>
        <header className={style.dropDownHeader}>
          <h2>메뉴</h2>
        </header>
        <section className={style.dropDownsection}>
          <ul className={style.dropDownBody}>
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/auth"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                영화
              </NavLink>
            </li>
          </ul>
        </section>
        <footer className={style.dropDownFooter}>
          <ul className={style.dropDownBody}>
            {token ? (
              <li>
                <NavLink
                  to={"/login"}
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
                <Form action={"/logout"} meth="post">
                  <button>Logout</button>
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
