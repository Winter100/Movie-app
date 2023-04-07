import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import SearchBar from "../pages/SearchBar";
import style from "./LootLayout.module.css";
import DropDownPage from "../pages/DropDownPage";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth-util";

function LootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <SearchBar />
      <div className={style.mainNavigatDropDown}>
        <DropDownPage />
      </div>
      <MainNavigation />
      <main className={style.mainNavigat}>
        <Outlet />
      </main>
    </>
  );
}

export default LootLayout;
