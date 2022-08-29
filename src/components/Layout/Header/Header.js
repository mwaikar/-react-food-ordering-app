import React from "react";

import mealsBgImage from '../../../assets/mealsBg.jpg';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsBgImage} alt="meals background" />
      </div>
    </React.Fragment>
  );
};

export default Header;