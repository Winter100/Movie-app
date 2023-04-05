import { Form, Link } from "react-router-dom";
import style from "./Comment-Input.module.css";
import { getAuthName, getAuthToken } from "../../util/auth-util";

function Comment() {
  const token = getAuthToken();
  const displayName = getAuthName();
  return (
    <>
      {token ? (
        <Form method="PUT">
          <div className={style.commentOutborder}>
            <div className={style.commentInputName}>
              <input
                type="text"
                name="name"
                placeholder="작성자"
                defaultValue={displayName ? displayName : ""}
                required
              />
            </div>
            <div className={style.commentInputPassword}>
              <input
                required
                type="password"
                name="password"
                minLength="4"
                placeholder="비밀번호"
              />
            </div>
            <div className={style.commentInputValue}>
              <textarea
                required
                placeholder="내용을 입력해주세요"
                name="value"
              />
            </div>
            <div className={style.commentInputButton}>
              <button>등록</button>
            </div>
          </div>
        </Form>
      ) : (
        <div className={style.commentInputNeedLogin}>
          <p>인증 된 사용자만 댓글을 남길 수 있습니다</p>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </>
  );
}

export default Comment;
