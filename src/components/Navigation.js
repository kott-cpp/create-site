import React from "react";
import { Link } from"react-router-dom";
import styles from '../button.module.css';

const Navigation = () => {
  return (
    <div className={styles.button}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;