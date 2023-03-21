import Spinner from "../../assets/Spinner.gif";

function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={Spinner} alt={"Loading"} width="8%" />
    </div>
  );
}

export default Loading;
