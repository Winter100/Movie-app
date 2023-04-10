import { useState, useEffect } from "react";
import { homeimg300, homeimg400 } from "../../util/url";
import style from "./HomeItem.module.css";
import { Link } from "react-router-dom";
function HomeItem({ item }) {
  const [movie, setMovie] = useState(0);
  const [imgName, setimgName] = useState(true);

  const lengthMinOne = item.length - 1;

  useEffect(() => {
    const remove = setInterval(() => {
      setMovie((num) => num + 1);
      setimgName((is) => !is);
    }, 4000);

    return () => clearInterval(remove);
  }, [movie, imgName]);

  if (movie < 0) {
    return setMovie(lengthMinOne);
  }
  if (movie > lengthMinOne) {
    return setMovie(0);
  }

  console.log(item);

  let leftNumber = item[movie - 1];
  let rightNumber = item[movie + 1];
  const itemNumber = item[movie];

  if (movie - 1 < 0) {
    leftNumber = lengthMinOne;
  }
  if (movie + 1 > lengthMinOne) {
    rightNumber = item[0];
  }

  const mainImgClassName = `${style.homeItemMainImg} ${
    imgName ? style.imgAnimation : style.imgAnimation2
  }`;

  return (
    <>
      <header className={style.homtItemHeader}>
        <h2 className={style.homeItemTitle}>오늘의 인기 영화</h2>
        <p style={{ color: "khaki" }}>{itemNumber?.title || "X"}</p>
      </header>
      <div className={style.homeItemOutBorder}>
        <div>
          <img
            onClick={() => setMovie((num) => num - 1)}
            className={style.homeItemsubImg}
            src={homeimg300 + leftNumber?.poster_path}
            alt={leftNumber.title}
          />
        </div>
        <div className={style.homeItemInBorders}>
          <div className={style.homeItemInBorder}>
            <div className={style.homeItemDetail}>
              <Link to={"/movies/detail/" + itemNumber?.id || "X"}>
                <img
                  className={mainImgClassName}
                  src={homeimg400 + itemNumber?.poster_path}
                  alt={itemNumber?.title || "X"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            onClick={() => setMovie((num) => num + 1)}
            className={style.homeItemsubImg}
            src={homeimg300 + rightNumber?.poster_path}
            alt={rightNumber.title}
          />
        </div>
      </div>
    </>
  );
}

export default HomeItem;
