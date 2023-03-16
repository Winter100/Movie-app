import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import SearchPage from "../pages/SearchPage";
import style from "./LootLayout.module.css";
function LootLayout() {
  return (
    <>
      <SearchPage />
      <MainNavigation />
      <main className={style.mainNavigat}>
        <Outlet />
      </main>
    </>
  );
}

export default LootLayout;
