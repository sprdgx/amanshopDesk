/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { userRequest } from "../../requestMethods";
import FileBase64 from 'react-file-base64'; // Import FileBase64
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon from Material-UI
import './slides.css'; // Import the CSS file

const SliderViewer = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await userRequest.get('/sliders');
        setSliders(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching sliders. Please try again later.');
        setLoading(false);
        console.error('Error fetching sliders:', error);
      }
    };

    fetchSliders();
  }, []);

  const handleAddImages = async (sliderId, imgFiles) => {
    try {
      console.log('Slider ID:', sliderId); // Add this line for debugging
      console.log('Sliders:', sliders); // Add this line for debugging
  
      const imgData = imgFiles.map(file => ({ img: file.base64 }));
      const updatedSlider = await userRequest.put(`/sliders/${sliderId}/addImage`, {
        imgs: [...sliders.find(slider => slider._id === sliderId).imgs, ...imgData]
      });
      setSliders(sliders.map(slider => (slider._id === sliderId ? updatedSlider.data : slider)));
    } catch (error) {
      console.error('Error adding images:', error);
    }
  };

  const handleDeleteImage = async (sliderId, imgIndex, isResponsive) => {
    try {
      const response = await userRequest.put(`/sliders/${sliderId}/deleteImage`, { imgIndex, isResponsive });
      setSliders(prevSliders =>
        prevSliders.map(slider =>
          slider._id === sliderId ? response.data : slider
        )
      );
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleAddResponsiveImages = async (sliderId, imgFiles) => {
    try {
      const imgData = imgFiles.map(file => ({ img: file.base64 }));
      const updatedSlider = await userRequest.put(`/sliders/${sliderId}/addImage`, {
        imgsR: [...sliders.find(slider => slider._id === sliderId).imgsR, ...imgData]
      });
      setSliders(sliders.map(slider => (slider._id === sliderId ? updatedSlider.data : slider)));
    } catch (error) {
      console.error('Error adding responsive images:', error);
    }
  };

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="slider-viewer-container">
      <ul className="slider-list">
        {sliders.map(slider => (
          <li key={slider._id} className="slider-item">
            <div className="slider-images">
              <h4>Images:</h4>
              <ul>
                {slider.imgs.map((imgData, index) => (
                  <li key={index}>
                    <DeleteIcon className="delete-icon" onClick={() => handleDeleteImage(slider._id, index, false)} />
                    <img src={imgData.img} alt={`Image ${index}`} className="slider-image" />
                  </li>
                ))}
              </ul>
              <FileBase64 className="file-base64-input" multiple={true} onDone={files => handleAddImages(slider._id, files)} />
            </div>
            <div className="slider-images">
              <h4>Responsive Images:</h4>
              <ul>
                {slider.imgsR.map((imgData, index) => (
                  <li key={index}>
                    <DeleteIcon className="delete-icon" onClick={() => handleDeleteImage(slider._id, index, true)} />
                    <img src={imgData.img} alt={`Responsive Image ${index}`} className="slider-image" />
                  </li>
                ))}
              </ul>
              <FileBase64 className="file-base64-input" multiple={true} onDone={files => handleAddResponsiveImages(slider._id, files)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderViewer;
