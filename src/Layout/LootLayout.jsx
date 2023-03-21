import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import SearchBar from "../pages/SearchBar";
import style from "./LootLayout.module.css";

function LootLayout() {
  return (
    <>
      <SearchBar />
      <MainNavigation />
      <main className={style.mainNavigat}>
        <Outlet />
      </main>
    </>
  );
}

export default LootLayout;
