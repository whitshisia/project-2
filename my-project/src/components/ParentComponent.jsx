import React from 'react';
import ImageSlider from './ImageSlider'; 
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const ParentComponent = () => {
  // Define your images array
  const images = [
    img1, img2, img3
  ];

  return (
    <div>
      {/* <h1>Image Slider</h1> */}
      <ImageSlider images={images} />
    </div>
  );
};

export default ParentComponent;
