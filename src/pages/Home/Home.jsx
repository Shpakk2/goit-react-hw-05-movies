import { useState, useEffect } from "react";
import { Container} from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { getPopularFilms} from "components/FetchApi";

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularFilms()
      .then(data => {
        return setFilms(data.results);
      });
  }, []);

  if (!films) {
    return;
  }

  return (
    <Container>
      <h1>Trending today</h1>
      <MovieList films={films} />
    </Container>
  );
};

export default Home