import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

import LootLayout from "./Layout/LootLayout";
import Movies, { loader as popularMoviesLoader } from "./pages/Movies";
import MovieLayout from "./Layout/MovieLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage, {
  loader as movieDetailLoader,
} from "./pages/MovieDeatailPage";
import GenresPage, { loader as genresLoader } from "./pages/GenresPage";
import TopRatedPage, { loader as topRatedLoader } from "./pages/TopRatedPage";

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
            { index: true, element: <Movies />, loader: popularMoviesLoader },
            {
              path: "genres",
              element: <GenresPage />,
              loader: genresLoader,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
