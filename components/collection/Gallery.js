"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import {Counter, Fullscreen,Thumbnails, Zoom, Slideshow, Share, Download} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  { src: "/media/images/photo1.jpg", alt: "Image 1", width: 300, height: 300 },
  { src: "/media/images/photo2.jpg", alt: "Image 2", width: 300, height: 300 },
  { src: "/media/images/photo3.jpg", alt: "Image 4", width: 300, height: 300 },
  { src: "/media/images/photo4.jpg", alt: "Image 5", width: 300, height: 300 },
  { src: "/media/images/photo5.jpg", alt: "Image 6", width: 300, height: 300 },
  { src: "/media/images/photo6.jpg", alt: "Image 7", width: 300, height: 300 },
  { src: "/media/images/photo7.jpg", alt: "Image 1", width: 300, height: 300 },
  { src: "/media/images/photo8.jpg", alt: "Image 2", width: 300, height: 300 },
  { src: "/media/images/photo9.jpg", alt: "Image 4", width: 300, height: 300 },
  { src: "/media/images/photo10.jpg", alt: "Image 5", width: 300, height: 300 },
  { src: "/media/images/photo11.jpg", alt: "Image 6", width: 300, height: 300 },
  { src: "/media/images/photo12.jpg", alt: "Image 7", width: 300, height: 300 },
  { src: "/media/images/photo13.jpg", alt: "Image 1", width: 300, height: 300 },
  { src: "/media/images/photo14.jpg", alt: "Image 2", width: 300, height: 300 },
  { src: "/media/images/photo15.jpg", alt: "Image 4", width: 300, height: 300 },
  { src: "/media/images/photo16.jpg", alt: "Image 4", width: 300, height: 300 },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = React.useRef(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full" 
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto rounded-lg transform transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
      {open && (
        <Lightbox
        plugins={[Counter, Fullscreen, Thumbnails, Zoom, Slideshow, Share, Download]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          open={open}
          close={() => setOpen(false)}
          slides={images.map((image) => ({ src: image.src }))}
          index={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
