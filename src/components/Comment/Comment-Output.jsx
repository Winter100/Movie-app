import { getAuth } from "firebase/auth";
import style from "./Comment-Output.module.css";
import { Form } from "react-router-dom";
function CommentOutput({ item, met }) {
  let commentList = [];

  if (item) {
    for (const key in item) {
      commentList.push({
        key: key,
        name: item[key].name,
        content: item[key].content,
        createdAt: item[key].createdAt,
        userId: item[key].userId,
      });
    }
  } else {
    commentList = "";
  }

  const auth = getAuth();
  const { currentUser } = auth;

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
                <span>{item.content}</span>
              </div>
              <div className={style.outPutDate}>
                <span>{item.createdAt}</span>
                <div>
                  <Form method={met}>
                    {currentUser?.uid === item.userId ? (
                      <button className={style.commentOutX}>X</button>
                    ) : (
                      ""
                    )}
                    <input type="hidden" name="key" defaultValue={item.key} />
                  </Form>
                </div>
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
