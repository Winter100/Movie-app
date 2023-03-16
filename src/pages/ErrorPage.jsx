import style from "./ErrorPage.module.css";

import { useRouteError } from "react-router-dom";
import LootLayout from "../Layout/LootLayout";
function ErrorPage() {
  const error = useRouteError();

  let title = "에러가 발생했습니다.";
  let message = "잠시후 다시 시도해주세요";

  if (error.status === 404) {
    title = "찾을 수 없는 페이지";
    message = "옳바른 경로로 접속해주세요";
  }

  console.log(error);
  return (
    <div className={style.errorheader}>
      <LootLayout />
      <main className={style.errormain}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </div>
  );
}

export default ErrorPage;
