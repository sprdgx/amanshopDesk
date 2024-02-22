import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    onChange(`rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <div style={{ width: '36px', height: '14px', borderRadius: '2px', backgroundColor: color }} />
      </div>
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <div onClick={handleClose} style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0' }} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
