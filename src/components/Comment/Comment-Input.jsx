import { Form, Link, useActionData } from "react-router-dom";
import style from "./Comment-Input.module.css";
import { getAuthName, getAuthToken } from "../../util/auth-util";
import { useMemo, useState } from "react";
import React from "react";

function Comment({ met }) {
  const token = getAuthToken();
  // const displayName = getAuthName();
  const displayName = useMemo(() => getAuthName() || "", []);

  const errors = useActionData();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setInputValue("");
  };

  return (
    <>
      {token ? (
        <Form method={met} onSubmit={handleSubmit}>
          <div className={style.commentOutborder}>
            <div className={style.commentInputName}>
              <p>{displayName}</p>
            </div>
            <div className={style.commentInputValue}>
              <textarea
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                required
                placeholder={errors ? errors?.content : "내용을 적어주세요"}
                minLength="1"
                name="value"
              />
            </div>
            <div className={style.commentInputButton}>
              <button type="submit">등록</button>
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

export default React.memo(Comment);
