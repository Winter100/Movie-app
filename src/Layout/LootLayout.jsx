import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import SearchBar from "../pages/SearchBar";
import style from "./LootLayout.module.css";
import DropDownPage from "../pages/DropDownPage";

function LootLayout() {
  return (
    <>
      <SearchBar />
      <DropDownPage />
      <MainNavigation />
      <main className={style.mainNavigat}>
        <Outlet />
      </main>
    </>
  );
}

export default LootLayout;
