import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header"

const Home = lazy(() => import('pages/Home/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Cast = lazy(() => import('./Cast/Cast'))



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="Reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};
