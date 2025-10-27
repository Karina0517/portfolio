"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./project.module.css";

interface ProjectCarouselProps {
  images: (string | StaticImageData)[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <Image
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          fill
          className={styles.carouselImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 70vw"
          priority
        />
      </div>

      <div className={styles.controls}>
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}
