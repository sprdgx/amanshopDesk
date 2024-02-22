// Sidebar.tsx

import { FC } from 'react';
import styles from '@/styles/Sidebar.module.css';
import Categories from './Categories';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} style={{ background: `linear-gradient(to top, teal, white)` }}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <ul className={styles.imageList}>
        <li className={styles.imageItem}>
          <Categories />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
