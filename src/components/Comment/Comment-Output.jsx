import style from "./Comment-Output.module.css";
function CommentOutput({ item }) {
  let commentList = [];

  if (item) {
    for (const key in item) {
      commentList.push({
        key: key,
        name: item[key].name,
        value: item[key].value,
        password: item[key].password,
        date: item[key].date,
      });
    }
  } else {
    commentList = "";
  }

  return (
    <div className={style.commentOutborder}>
      <ul className={style.commentOutUl}>
        {commentList ? (
          commentList.map((item) => (
            <li key={item.key} className={style.commentLi}>
              <div>
                <span>{item.name}</span>
              </div>
              <div>
                <span className={style.outPutValue}>{item.value}</span>
              </div>
              <div className={style.outPutDate}>
                <span>{item.date}</span>
              </div>
            </li>
          ))
        ) : (
          <div className={style.outPutNone}>
            <p>작성된 댓글이 없습니다</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default CommentOutput;
