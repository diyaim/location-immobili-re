import { useEffect, useState } from "react";

import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import arrowLeftRes from "../assets/arrow_left_respons.png";
import arrowRightRes from "../assets/arrow_right_respons.png";

export default function Gallery({ images = [], alt = "" }) {
  const [source, setSource] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      setSource(images[0]);
    }
  }, []);

  function left() {
    //decremente index
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  function right() {
    //incrimente index
    setIndex((prevIndex) => (prevIndex + 1) % images.length); //modulo pour pas dpasser la taille du tableau
  }

  useEffect(() => {
    //mise a jour de la source
    setSource(images[index]);
  }, [index]);
  return (
    <div className="gallery">
      <img className="gallery_img" src={source} alt={alt}></img>

      {images.length > 1 && (
        <div>
          <img
            className="arrow_left desktop"
            onClick={left}
            src={arrowLeft}
            alt="previous"
            data-testid="arrow_left_desktop"
          ></img>
          <img //pour le responsive
            className="arrow_left respons"
            onClick={left}
            src={arrowLeftRes}
            alt="previous"
            data-testid="arrow_left_respons"
          ></img>
          <img
            className="arrow_right desktop"
            onClick={right}
            src={arrowRight}
            alt="next"
            data-testid="arrow_right_desktop"
          ></img>
          <img //pour le responsive
            className="arrow_right respons"
            onClick={right}
            src={arrowRightRes}
            alt="next"
            data-testid="arrow_right_respons"
          ></img>
          <div className="gallery_counter" data-testid="counter">
            {index + 1}/{images.length}
          </div>
        </div>
      )}
    </div>
  );
}
