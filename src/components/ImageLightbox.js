import React, { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';

// Plugins
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

/**
 * ImageLightbox component
 * Props: images (array of { src, alt })
 */
export default function ImageLightbox({ images }) {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        plugins: [lgZoom, lgThumbnail],
        selector: 'a',
        zoom: true,
        thumbnail: true,
        download: false,
      });
    }
  }, []);

  return (
    <div ref={galleryRef}>
      {images.map((img, idx) => (
        <a key={idx} href={img.src}>
          <img
            src={img.src}
            alt={img.alt || `Image ${idx + 1}`}
            style={{
              maxWidth: '300px',
              margin: '10px',
              borderRadius: '8px',
              cursor: 'zoom-in',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
        </a>
      ))}
    </div>
  );
}
