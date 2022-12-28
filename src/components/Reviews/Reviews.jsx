import { getFilmReviews } from "components/FetchApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { List } from "./Reviews.styled";

const Reviews = () => {
  const { id } = useParams();
  const [filmReviews, setfilmReviews] = useState([]);
  useEffect(() => {
    getFilmReviews(id).then(data => {
      return setfilmReviews(data.results);
    });
  }, [id]);

  if (!filmReviews) {
    return;
  }

  return (
    <div>
      {filmReviews.length === 0 ? (
        <p>We don`t have any reviews for this movie.</p>
      ) : (
        <List>
          {filmReviews.map(filmReview => (
            <li key={filmReview.id}>
              <h3>Author: {filmReview.author}</h3>
              <p>{filmReview.content}</p>
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default Reviews;