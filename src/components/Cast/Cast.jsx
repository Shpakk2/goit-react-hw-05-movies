import { useParams } from "react-router-dom";
import { getFilmCast } from "components/FetchApi";
import { useState, useEffect } from 'react';
import { List } from './Cast.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
const ANONIM_IMG = 'https://www.pngkit.com/png/detail/22-222629_video-camera-icon-self-taping-the-actors-guide.png'

const Cast = () => {
  const { id } = useParams();
  const [filmCast, setfilmCast] = useState([]);
  useEffect(() => {
    getFilmCast(id).then(data => {
      return setfilmCast(data.cast);
    });
  }, [id]);

  if (!filmCast) {
    return;
  }

  return (
    <div>
      <List>
        {filmCast.map(filmActior => (
          <li key={filmActior.id}>
            <img
              src={
                !filmActior.profile_path
                  ? ANONIM_IMG
                  : `${BASE_IMG}${filmActior.profile_path}`
              }
              alt={filmActior.name}
              width="150"
            />
            <p>Author: {filmActior.name}</p>
            <p>{filmActior.character}</p>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;