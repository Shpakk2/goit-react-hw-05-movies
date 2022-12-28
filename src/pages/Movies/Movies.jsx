import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmByQuery } from 'components/FetchApi';
import { Container, Input, Btn } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [films, setFilms] = useState([]);
  const onFormSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value === "") {
      return;
    }
      setSearchParams({ query: event.target.elements.query.value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getFilmByQuery(query)
      .then(data => {
        return setFilms(data.results);
      });
  }, [query]);

  if (!films) {
    return;
  }

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
        />
        <Btn type="submit">
          <span>Search</span>
        </Btn>
      </form>
      {films.length !== 0 && (
        <MovieList films={films} />
      )}
    </Container>
  );
};

export default Movies;