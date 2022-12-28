import {useLocation } from 'react-router-dom';
import { List, FilmLink, Item, Img, Text, } from './MovieList.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

export const MovieList = ({films}) => {
      const location = useLocation();
    return (
        <List>
          {films.map(film => (
            <Item key={film.id}>
              <FilmLink
                to={`/movies/${film.id}`}
                state={{ from: location }}
                style={{ display: 'flex' }}
              >
                <Img
                  src={`${BASE_IMG}${film.poster_path}`}
                  alt={film.original_title}
                  width="240"
                />
                <Text>{film.original_title}</Text>
              </FilmLink>
            </Item>
          ))}
        </List>
    )
}
