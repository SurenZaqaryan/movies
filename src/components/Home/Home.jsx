import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/moviesSlice';
import data from '../../data/data.json';
import styles from './styles.module.css';
import TitleImage from '../../assets/FeaturedTitleImage.png';
import Carousel from '../Carousel/Carousel';
import Menu from '../Menu/Menu';
import { BsFillPlayFill } from 'react-icons/bs';

function Home() {
  const dispatch = useDispatch();
  const featuredMovie = useSelector((state) => state.movies.Featured);
  const [videoMode, setVideoMode] = useState(false);

  useEffect(() => {
    dispatch(getMovies(data));
  }, [dispatch]);

  function getDurationFromSeconds(seconds) {
    const formattedHours = Math.floor(seconds / 3600);
    const formattedMinutes = Math.floor((seconds % 3600) / 60);
    const formattedSeconds = seconds % 60;
    const formattedHoursStr = formattedHours < 10 ? '0' + formattedHours : formattedHours;
    const formattedMinutesStr = formattedMinutes < 10 ? '0' + formattedMinutes : formattedMinutes;
    const formattedSecondsStr = formattedSeconds < 10 ? '0' + formattedSeconds : formattedSeconds;
    return `${formattedHoursStr}:${formattedMinutesStr}:${formattedSecondsStr}`;
  }

  return (
    <div className={videoMode ? styles.wrapper_for_video : styles.wrapper}>
      {videoMode && (
        <video src={featuredMovie.VideoUrl} className={styles.bg_video} autoPlay muted loop></video>
      )}
      <div className={styles.info_block}>
        <div>
          <h3>{featuredMovie?.Category}</h3>
        </div>
        <div>
          <img src={TitleImage} className={styles.titleImage} alt="title" />
        </div>
        <div className={styles.release_rating_duration_wrapper}>
          <h4>{featuredMovie?.ReleaseYear}</h4>
          <h4>{featuredMovie?.MpaRating}</h4>
          <h4>{getDurationFromSeconds(featuredMovie?.Duration)}</h4>
        </div>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quae eaque qui sint
            voluptate ipsam eligendi facilis itaque velit temporibus similique quo, alias explicabo,
            necessitatibus eveniet nemo repellat quos deserunt!
          </h3>
        </div>
        <div className={styles.info_block_btns_wrapper}>
          <button className={styles.info_block_btn1}>
            <BsFillPlayFill />
            <span>Play</span>
          </button>
          <button className={styles.info_block_btn2}>More info</button>
        </div>
      </div>
      <div className={styles.carousel_container}>
        <Carousel videoMode={videoMode} setVideoMode={setVideoMode} />
      </div>
      <Menu />
    </div>
  );
}

export default Home;
