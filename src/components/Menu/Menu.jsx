import React, { useState } from 'react';
import styles from './style.module.css';
import icon1 from '../../assets/icons/icon_1.png';
import icon2 from '../../assets/icons/icon_2.png';
import icon3 from '../../assets/icons/icon_3.png';
import icon4 from '../../assets/icons/icon_4.png';
import icon5 from '../../assets/icons/icon_5.png';
import icon6 from '../../assets/icons/icon_6.png';
import { BsPersonBoundingBox } from 'react-icons/bs';

function Menu() {
  const [isActiveMode, setActiveMode] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const handleChangeActiveItem = (text) => {
    setActiveItem(text);
  };

  return (
    <div
      className={isActiveMode ? styles.wrapper_for_active_mode : styles.wrapper}
      onMouseEnter={() => setActiveMode(true)}
      onMouseLeave={() => {
        setActiveMode(false);
      }}>
      {isActiveMode && (
        <div
          style={{
            margin: '0px 10px 10px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}>
          <BsPersonBoundingBox size={26} />
          <h2>Suren</h2>
        </div>
      )}
      <div
        className={
          activeItem === 'search' && isActiveMode ? styles.active_item_wrapper : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('search')}>
        <div
          className={
            activeItem === 'search' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon1} alt="icon1" />
        </div>
        {isActiveMode && <h3>Search</h3>}
      </div>
      <div
        className={
          activeItem === 'home' && isActiveMode ? styles.active_item_wrapper : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('home')}>
        <div
          className={
            activeItem === 'home' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon2} alt="icon2" />
        </div>
        {isActiveMode && <h3>Home</h3>}
      </div>
      <div
        className={
          activeItem === 'tvShows' && isActiveMode
            ? styles.active_item_wrapper
            : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('tvShows')}>
        <div
          className={
            activeItem === 'tvShows' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon3} alt="icon3" />
        </div>
        {isActiveMode && <h3>TV Shows</h3>}
      </div>
      <div
        className={
          activeItem === 'movies' && isActiveMode ? styles.active_item_wrapper : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('movies')}>
        <div
          className={
            activeItem === 'movies' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon4} alt="icon4" />
        </div>
        {isActiveMode && <h3>Movies</h3>}
      </div>
      <div
        className={
          activeItem === 'genres' && isActiveMode ? styles.active_item_wrapper : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('genres')}>
        <div
          className={
            activeItem === 'genres' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon5} alt="icon5" />
        </div>
        {isActiveMode && <h3>Genres</h3>}
      </div>
      <div
        className={
          activeItem === 'watchLater' && isActiveMode
            ? styles.active_item_wrapper
            : styles.item_wrapper
        }
        onClick={() => handleChangeActiveItem('watchLater')}>
        <div
          className={
            activeItem === 'watchLater' && !isActiveMode
              ? styles.active_icon_wrapper
              : styles.icon_wrapper
          }>
          <img src={icon6} alt="icon6" />
        </div>
        {isActiveMode && <h3>Watch Later</h3>}
      </div>
      {isActiveMode && (
        <div className={styles.options_for_active_menu}>
          <h2 className={styles.option_item}>Language</h2>
          <h2 className={styles.option_item}>Get Help</h2>
          <h2 className={styles.option_item}>Exit</h2>
        </div>
      )}
    </div>
  );
}

export default Menu;
