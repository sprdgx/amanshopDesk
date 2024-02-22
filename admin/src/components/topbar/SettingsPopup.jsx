import React from 'react';
import './topbar.css';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const SettingsPopup = ({ onClose }) => {
  return (
    <div className="settings-popup-background" onClick={onClose}>
      <div className="settings-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Settings</h2>
        <div className="settings-options">
          <div className="settings-option">
            <Link to='/categories'>
            <AddIcon />
            <div>Adding Categories</div>
            </Link>
          </div>
          <Link to='/slides'>
          <div className="settings-option">
            <AddIcon />
            <span>Adding Slides</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
