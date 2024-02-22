import { useSelector } from "react-redux";
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { RootState } from '@/redux/store';
import { FC, useState } from "react";
import styles from '@/styles/Navbar.module.css';
import Image from "next/image";
import Sidebar from "./Sidebar";

const Navbar: FC = () => {
    const quantity = useSelector((state: RootState) => state.cart.quantity);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar}
              edge="start"
            >
              <MenuIcon style={{ color: 'teal', height: '40px', width: '40px' }} />
            </IconButton >
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </div>
          <div className={styles.center}>
            <Link href={'/'} passHref>
              <Image
                src='https://github.com/sprdgx/ammanshop-pictures/blob/main/MNlogo.png?raw=true'
                width={90}
                height={60}
                alt=""
                className={styles.image}
              />
            </Link>
          </div>
          <div className={styles.right}>
            <Link href={'/cart'} passHref>
              <div className={styles.menuItem}>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon style={{ color: 'teal', height: '40px', width: '40px' }} />
                </Badge>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
