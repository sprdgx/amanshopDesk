import React from 'react';
import './users.css';

const persistRoot = localStorage.getItem("persist:root");


const ProfileDetails = ({ onClose }) => {

    const parsedRoot = JSON.parse(persistRoot);
    const currentUser = parsedRoot.user ? JSON.parse(parsedRoot.user).currentUser : null;

  return (
    <div className="profileDetails">
      <img src={currentUser.img} alt="Profile Avatar" className="avatar" />
      <div className="details">
        <h3>{currentUser.username}</h3>
        <p>{currentUser.email}</p>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProfileDetails;
