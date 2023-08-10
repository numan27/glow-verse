import React, { useState } from 'react';

const ImageSelector = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md">
        <div className="flex justify-center gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`border rounded cursor-pointer ${
                selectedImage === image.path ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => handleImageClick(image.path)}
            >
              <img
                src={image.path}
                alt={image.label}
                className="w-full h-auto"
              />
              <p className="text-center mt-2">{image.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSelector;
