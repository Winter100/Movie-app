import { Form } from "react-router-dom";
import style from "./Comment-Input.module.css";

function Comment() {
  return (
    <Form method="PUT">
      <div className={style.commentOutborder}>
        <div className={style.commentInputName}>
          <input type="text" name="name" placeholder="작성자" required />
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
          <textarea required placeholder="내용을 입력해주세요" name="value" />
        </div>
        <div className={style.commentInputButton}>
          <button>등록</button>
        </div>
      </div>
    </Form>
  );
}

export default Comment;
