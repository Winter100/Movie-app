import style from "./Btn.module.css";

function Btn(props) {
  return <button className={style.btn}>{props.title}</button>;
}
export default Btn;
