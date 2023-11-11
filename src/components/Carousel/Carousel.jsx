import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { changeFeaturedMovie } from '../../redux/moviesSlice';

function Carousel({ setVideoMode }) {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  let filteredMovies = [...movies]
    .sort((a, b) => new Date(a.Date) - new Date(b.Date))
    .splice(0, 50);

  const handleChangeFeaturedMovie = (movie) => {
    dispatch(changeFeaturedMovie(movie));
    setTimeout(() => {
      setVideoMode(true);
    }, 2000);
  };

  return (
    <div className={styles.carousel_wrapper}>
      {filteredMovies.map((movie) => {
        return (
          <img
            onClick={() => handleChangeFeaturedMovie(movie)}
            key={movie.Id}
            className={styles.carousel_item_wrapper}
            src={require(`../../assets/${movie.CoverImage}`)}
            alt="movie"
          />
        );
      })}
    </div>
  );
}

export default Carousel;
