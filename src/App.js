import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

import LootLayout from "./Layout/LootLayout";
import Movies, { loader as comingLoader } from "./pages/Movies";
import MovieLayout from "./Layout/MovieLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage, {
  loader as movieDetailLoader,
} from "./pages/MovieDeatailPage";
import FilmsPage, { loader as popularMoviesLoader } from "./pages/FilmsPage";
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
        { index: true, element: <HomePage /> },
        {
          path: "movies",
          element: <MovieLayout />,
          children: [
            { index: true, element: <Movies />, loader: comingLoader },
            {
              path: "films",
              element: <FilmsPage />,
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
