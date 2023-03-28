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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LootLayout />,
      errorElement: <ErrorPage />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
