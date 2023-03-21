import style from "./HomeItem.module.css";

function HomeItem({ item }) {
  console.log("item", item);

  const imgbase = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <ul>
        {item.map((item) => (
          <li key={item.id} className={style.homeItemLi}>
            <h2>{item.title}</h2>
            <img src={imgbase + item.poster_path} alt={item.title} />
            <p>개봉일: {item.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeItem;
