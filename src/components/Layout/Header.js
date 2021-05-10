import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          src={mealsImage}
          alt="A table full of food"
          className={classes["main-image"]}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
