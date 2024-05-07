import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-brand']}><img src='/Images/img-4.png' alt='logo'></img> </div>
        <div className={`${styles['navbar-menu']} ${isOpen ? styles.open : ''}`}>
        <ul className={styles['navbar-items']}>
  <li className={styles['navbar-item']}><Link to="/">Home</Link></li>
  <li className={styles['navbar-item']}><Link to="/about">About</Link></li>
  <li className={styles['navbar-item']}><Link to="/services">Services</Link></li>
  <li className={styles['navbar-item']}><Link to="/contact">Contact</Link></li>
</ul>
        </div>
        <div className={styles['navbar-buttons']}>
          <button className={styles['navbar-button']}><Link to="/login">Login</Link></button>
          <button className={styles['navbar-button']}><Link to="/Signup">signup</Link> </button>
        </div>
        <button className={styles['navbar-toggle']} onClick={toggleSidebar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
