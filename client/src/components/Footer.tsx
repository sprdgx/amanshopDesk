import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contactItem}>
          <LocationOnIcon style={{ marginRight: '10px' }} />
          <span>24 Rue des Mandarines groupe des propriétés 243 Tamaris Mohammadia Alger</span>
        </div>
        <div className={styles.contactItem}>
          <PhoneIcon style={{ marginRight: '10px' }} /> <span>0554628035 / 0550675280</span>
        </div>
        <div className={styles.contactItem}>
          <EmailIcon style={{ marginRight: '10px' }} /> <span>aman@ammanshopdz.com</span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.socialContainer}>
          <a href="https://www.facebook.com/profile.php?id=61555665560838&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <div className={`${styles.socialIcon} ${styles.facebook}`}>
              <FacebookIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/aman.shop.dz/" target="_blank" rel="noopener noreferrer">
            <div className={`${styles.socialIcon} ${styles.instagram}`}>
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
