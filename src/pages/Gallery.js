import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    {
      id: 1,
      url: 'https://via.placeholder.com/300x200/ff8c42/ffffff?text=Image+1',
      alt: 'Gallery Image 1'
    },
    {
      id: 2,
      url: 'https://via.placeholder.com/300x200/ffc107/333333?text=Image+2',
      alt: 'Gallery Image 2'
    },
    {
      id: 3,
      url: 'https://via.placeholder.com/300x200/ff6f61/ffffff?text=Image+3',
      alt: 'Gallery Image 3'
    },
    {
      id: 4,
      url: 'https://via.placeholder.com/300x200/ff8c42/ffffff?text=Image+4',
      alt: 'Gallery Image 4'
    },
    {
      id: 5,
      url: 'https://via.placeholder.com/300x200/ffc107/333333?text=Image+5',
      alt: 'Gallery Image 5'
    },
    {
      id: 6,
      url: 'https://via.placeholder.com/300x200/ff6f61/ffffff?text=Image+6',
      alt: 'Gallery Image 6'
    }
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1>Gallery</h1>
        <p className="gallery-subtitle">A collection of my work and experiences</p>
        
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
