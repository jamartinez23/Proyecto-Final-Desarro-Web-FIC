import React from 'react';

const ImageSection = ({ src, alt }) => {
  return (
    <div className="image-section">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageSection;
