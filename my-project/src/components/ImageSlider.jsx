import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [images]);

  const handleModernowClick = () => {
    navigate('/onlineorders');
  };

  return (
    <div className="max-w-screen-xl"style={{ position: 'relative', overflow: 'hidden', width: '130vh', height: '100vh' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentIndex * 100}%)` }}>
        {images && images.length > 0 &&
          images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ))}
      </div>

      <button type="button" 
        className="focus:outline-none text-white bg-green-700 
        hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 
        dark:hover:bg-green-700 dark:focus:ring-green-800"
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }} onClick={handleModernowClick}>ORDER NOW</button>
    </div>
  );
};

export default ImageSlider;
