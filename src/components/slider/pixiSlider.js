import React, { useState, useEffect, useRef } from "react"
import "./slider.css" // Import CSS file
import { Application } from "@pixi/app"
import { Sprite } from "@pixi/sprite"
import college from "../../images/arusha.jpg"
import mbdtf from "../../images/mbdtf.jpg"
import king from "../../images/1_UY3HMht-NJCRS3DNCgbo9Q.jpg"
import eightoeight from "../../images/808.webp"

const PixiSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const app = useRef(null)

  const localImages = [eightoeight, college, king]

  useEffect(() => {
    app.current = new Application({
      width: window.innerWidth,
      height: 700,
      transparent: true,
    })

    document.getElementById("stage-container").appendChild(app.current.view)

    return () => {
      app.current.destroy(true)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === localImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [localImages.length])

  useEffect(() => {
    app.current.stage.removeChildren()

    const sprite = Sprite.from(localImages[currentImageIndex])
    sprite.anchor.set(0.5)
    sprite.position.set(window.innerWidth / 2, 350)
    sprite.scale.set(currentImageIndex === 0 ? 0.5 : 0.5)

    app.current.stage.addChild(sprite)
  }, [currentImageIndex])

  return (
    <div className="slider-container">
      <div id="stage-container" className="stage-container"></div>
      <div className="button-container">
        {localImages.map((_, index) => (
          <button
            key={index}
            className={`dot-button ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default PixiSlider

// import React, { useState, useEffect } from "react";
// import "./slider.css";
// import college from "../../images/arusha.jpeg";
// import mbdtf from "../../images/mbdtf.jpeg";
// import king from "../../images/1_UY3HMht-NJCRS3DNCgbo9Q.jpg";

// const PixiSlider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const localImages = [mbdtf, college, king];

//   const handleDotClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowLeft") {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === 0 ? localImages.length - 1 : prevIndex - 1
//         );
//       } else if (e.key === "ArrowRight") {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === localImages.length - 1 ? 0 : prevIndex + 1
//         );
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [localImages.length]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === localImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [localImages.length]);

//   const getClassName = (index) => {
//     if (index === currentImageIndex) {
//       return "image-container center";
//     } else if (
//       index === currentImageIndex - 1 ||
//       (currentImageIndex === 0 && index === localImages.length - 1)
//     ) {
//       return "image-container left";
//     } else if (
//       index === currentImageIndex + 1 ||
//       (currentImageIndex === localImages.length - 1 && index === 0)
//     ) {
//       return "image-container right";
//     } else {
//       return "image-container";
//     }
//   };

//   return (
//     <div className="slider-container">
//       <div className="stage-container">
//         {localImages.map((image, index) => (
//           <div
//             key={index}
//             className={getClassName(index)}
//           >
//             <img src={image} alt={`slide-${index}`} />
//           </div>
//         ))}
//       </div>
//       <div className="button-container">
//         {localImages.map((_, index) => (
//           <button
//             key={index}
//             className={`dot-button ${
//               index === currentImageIndex ? "active" : ""
//             }`}
//             onClick={() => handleDotClick(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PixiSlider;
