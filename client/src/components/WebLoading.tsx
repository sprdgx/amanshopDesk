import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from '@/styles/WebLoading.module.css'; // Add CSS styles for the component

const LoadingAnimation = () => {
  return (
    <div className={styles["loading-animation-container"]} style={{ background: `linear-gradient(to top, teal, gray)` }}>
      <div className={styles["loading-text-top"]}>
        AMANSHOP
      </div>
      <div className={styles.loadinganimation}>
        <ShoppingCartOutlinedIcon className={styles.loadingicon} style={{fontSize:'170px'}}/>
      </div>
    </div>
  );
};

export default LoadingAnimation;
