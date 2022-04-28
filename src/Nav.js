import React, { useState, useEffect } from "react";
import "./Nav.css";


function Nav() {
const[show, handleShow]= useState(false);
const transitionNavBar = () => {
  if (window.scrollY > 100){
    handleShow(true);
  }else{
    handleShow(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll",transitionNavBar)
  return() =>window.removeEventListener('scroll',transitionNavBar)
}, [])

  return (
    <div className = {`nav ${show && 'nav__back'}`}>
      <div className="nav__contents">
        <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt=""/>
      
        <img 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt=""/>
      </div>
    </div>
  );
}

export default Nav;
