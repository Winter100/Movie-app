import style from "./Comment-Output.module.css";
function CommentOutput({ item }) {
  let commentList = [];

  if (item) {
    for (const key in item) {
      commentList.push({
        key: key,
        name: item[key].name,
        content: item[key].content,
        password: item[key].password,
        createdAt: item[key].createdAt,
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
                <span className={style.outPutValue}>{item.content}</span>
              </div>
              <div className={style.outPutDate}>
                <span>{item.createdAt}</span>
              </div>
            </li>
          ))
        ) : (
          <div className={style.outPutNone}>
            <p>댓글이 없습니다</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default CommentOutput;
