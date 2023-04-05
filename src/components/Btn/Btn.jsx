import style from "./Btn.module.css";

function Btn({ setDropDownMenu }) {
  return (
    <>
      <div
        className={style.menuTrigger}
        onClick={() => setDropDownMenu((is) => !is)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
export default Btn;
