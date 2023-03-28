import style from "./Comment-Output.module.css";
function CommentOutput({ item }) {
  const commentList = [];

  for (const key in item) {
    commentList.push({
      key: key,
      name: item[key].name,
      value: item[key].value,
      password: item[key].password,
      date: item[key].date,
    });
  }

  return (
    <div className={style.commentOutborder}>
      <ul>
        {commentList.map((item) => (
          <li key={item.key} className={style.commentLi}>
            <div>
              <span>{item.name}</span>
            </div>
            <div>
              <span>{item.value}</span>
            </div>
            <div>
              <span>{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentOutput;
