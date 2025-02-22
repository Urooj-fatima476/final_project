import React, { useState } from 'react';
import styles from './Home.module.css'; // Update the import path if needed

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/Images/img-4.png",
    "/Images/img-5.png",
    "/Images/img-3.png"
  ];

  const handleImageChange = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.Home} id='home-section'>
      <div className={styles['image-container']} onClick={handleImageChange}>
        <img src={images[imageIndex]} alt="Home" className={styles["home-image"]} />
      </div>
      <div className={styles["text-content"]}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and explore the possibilities.</p>
        <button className={styles['button']} onClick={() => window.location.href="#services"}>
          Get Started
        </button>  
      </div>
    </div>
  );
};

export default Home;
