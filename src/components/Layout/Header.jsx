import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        
          <HeaderCartButton onClick={props.onClickCart}/> 
        
      </header>
      <div className={classes["main-image"]}>
        <img src="img/meals.jpg" alt="A Table full of delicious food" />
      </div>
    </Fragment>
  );
}
export default Header;
