import React from 'react';
import styles from '@/styles/AboutUs.module.css';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Amanshop : Essentiels Modernes pour la Maison</h2>
        <p className={styles.description}>
          Amanshop propose des innovations essentielles en électroménager pour les foyers modernes. Découvrez un design élégant et une fonctionnalité sans effort, transformant votre expérience quotidienne. Rehaussez votre maison, sans effort.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="https://github.com/sprdgx/ammanshop-pictures/blob/main/image1.png?raw=true" 
          alt="About Us Image" 
          className={styles.image}
          width={400}
          height={250}
        />
      </div>
    </div>
  );
};

export default AboutUs;