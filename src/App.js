import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as homeLoader } from "./pages/Home";

import LootLayout from "./Layout/LootLayout";
import PopularPage, {
  loader as popularMoviesLoader,
} from "./pages/PopularPage";
import MovieLayout from "./Layout/MovieLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage, {
  loader as movieDetailLoader,
  action as movieDetailAction,
} from "./pages/MovieDeatailPage";
import ComingPage, { loader as comingLoader } from "./pages/ComingPage";
import TopRatedPage, { loader as topRatedLoader } from "./pages/TopRatedPage";
import SearchResultsPage, {
  loader as searchLoader,
} from "./pages/SearchResultsPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import { action as logOutAction } from "./pages/LogoutPage";
import { tokenLoader } from "./util/auth-util";
import MyPage, {
  loader as mypageLoader,
  action as mypageAction,
} from "./pages/MyPage";
import WishListPage, { loader as wishListLoader } from "./pages/WishListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LootLayout />,
      errorElement: <ErrorPage />,
      loader: tokenLoader,
      children: [
        { index: true, element: <HomePage />, loader: homeLoader },
        {
          path: "movies",
          element: <MovieLayout />,
          children: [
            { index: true, element: <ComingPage />, loader: comingLoader },
            {
              path: "popular",
              element: <PopularPage />,
              loader: popularMoviesLoader,
            },
            {
              path: "toprated",
              element: <TopRatedPage />,
              loader: topRatedLoader,
            },
          ],
        },
        {
          path: "/movies/detail/:id",
          element: <MovieDetailPage />,
          action: movieDetailAction,
          loader: movieDetailLoader,
        },
        {
          path: "/resultes",
          element: <SearchResultsPage />,
          loader: searchLoader,
        },
        {
          path: "/auth",
          element: <AuthPage />,
          action: authAction,
        },
        {
          path: "/login",
          element: <LoginPage />,
          action: loginAction,
        },
        {
          path: "/myPage",
          element: <MyPage />,
          loader: mypageLoader,
          action: mypageAction,
        },
        {
          path: "wishlist",
          element: <WishListPage />,
          loader: wishListLoader,
        },
        { path: "logout", action: logOutAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
