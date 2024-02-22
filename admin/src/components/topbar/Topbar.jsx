// TopBar.js
import React, { useState } from 'react';
import SettingsIcon from "@mui/icons-material/Settings";
import MN from '../../assets/MN.png'
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import './topbar.css';
import SettingsPopup from './SettingsPopup';
import ProfileDetails from '../users/Users';

const persistRoot = localStorage.getItem("persist:root");


export default function TopBar() {
  const location = useLocation();
  const isOrdersPage = location.pathname === '/orders';
  const [showText, setShowText] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); 

  const parsedRoot = JSON.parse(persistRoot);
  const currentUser = parsedRoot.user ? JSON.parse(parsedRoot.user).currentUser : null;



  const handleClick = () => {
    setShowText(!showText);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false); 
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">
            <img src={MN} alt="" className="topLogo" />
          </div>
        </div>
        <div className="topCenter">
          <div>
            <Link to={isOrdersPage ? '/' : '/orders'} className="link" onClick={handleClick}>
              <span>
                <CSSTransition in={showText} timeout={300} classNames="fade" unmountOnExit>
                  <span className="text">Orders</span>
                </CSSTransition>
                <CSSTransition in={!showText} timeout={300} classNames="fade" unmountOnExit>
                  <span className="text">Products</span>
                </CSSTransition>
              </span>
            </Link>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <SettingsIcon onClick={handleSettingsClick} />
          </div>
          <img src={currentUser.img} className="topAvatar" alt="Avatar" onClick={handleProfileClick} />
        </div>
      </div>
      {isSettingsOpen && <SettingsPopup onClose={handleCloseSettings} />}
      {isProfileOpen && <ProfileDetails onClose={handleCloseProfile} />}
    </div>
  );
}
