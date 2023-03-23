import { useState } from "react";
import { homeimg300, homeimg400 } from "../../util/url";
import style from "./HomeItem.module.css";
import { Link } from "react-router-dom";
function HomeItem({ item }) {
  const data = item;

  const [movie, setMovie] = useState(0);

  // useEffect(() => {
  //   const remove = setInterval(() => {
  //     setMovie((num) => num + 1);
  //   }, 2500);
  //   return () => clearInterval(remove);
  // }, [movie]);

  if (movie < 0) {
    return setMovie(19);
  }
  if (movie > 19) {
    return setMovie(0);
  }
  console.log(data);

  let leftNumber = item[movie - 1];
  let rightNumber = item[movie + 1];
  const itemNumber = item[movie];

  if (movie - 1 < 0) {
    leftNumber = item[19];
  }
  if (movie + 1 > 19) {
    rightNumber = item[0];
  }

  return (
    <div className={style.homeItemOutBorder}>
      <div>
        <img
          onClick={() => setMovie((num) => num - 1)}
          className={style.homeItemsubImg}
          src={homeimg300 + leftNumber.poster_path}
          alt={leftNumber.title}
        />
      </div>

      <div className={style.homeItemInBorders}>
        <h2 className={style.homeItemTitle}>오늘의 인기 영화</h2>
        <div className={style.homeItemInBorder}>
          <div className={style.homeItemDetail}>
            <p className={style.homeItemTitle}>{itemNumber.title}</p>
            <Link to={"/movies/detail/" + itemNumber.id}>
              <img
                className={style.homeItemMainImg}
                src={homeimg400 + itemNumber.poster_path}
                alt={itemNumber.title}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          onClick={() => setMovie((num) => num + 1)}
          className={style.homeItemsubImg}
          src={homeimg300 + rightNumber.poster_path}
          alt={rightNumber.title}
        />
      </div>
      <div></div>
      <p>{movie}</p>
    </div>
  );
}

export default HomeItem;
