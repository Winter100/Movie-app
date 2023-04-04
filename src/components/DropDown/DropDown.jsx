import { NavLink } from "react-router-dom";
import style from "./DropDown.module.css";
function DropDown({ setDropDownMenu }) {
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
                로그인
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/auth"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                회원가입
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DropDown;
