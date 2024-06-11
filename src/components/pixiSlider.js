import React, { useEffect, useRef } from "react"
import * as PIXI from "pixi.js"

const marvelsImage =
  "https://img.buzzfeed.com/buzzfeed-static/complex/images/g6ve3p8v23rqcldck2ov/yeezus.jpg?downsize=1840:*&output-format=auto&output-quality=auto"

const PixiSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [hoveredImageInfo, setHoveredImageInfo] = useState({
    name: "",
    description: "",
  })

  const localImages = [
    {
      image: marvelsImage,
      name: "Marvels",
      description: "Image from the Marvels series",
    },
    {
      image: madMaxImage,
      name: "Mad Max: Fury Road",
      description: "Image from the Mad Max: Fury Road movie",
    },
  ]

  const handleSwipe = direction => {
    if (direction === "left") {
      setCurrentImageIndex(prevIndex =>
        prevIndex === 0 ? localImages.length - 1 : prevIndex - 1
      )
    } else if (direction === "right") {
      setCurrentImageIndex(prevIndex =>
        prevIndex === localImages.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const handleMouseEnter = index => {
    setHovered(true)
    setHoveredImageInfo({
      name: localImages[index].name,
      description: localImages[index].description,
    })
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "ArrowLeft") {
        handleSwipe("left")
      } else if (e.key === "ArrowRight") {
        handleSwipe("right")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="slider-container">
      <div className="stage-container">
        <Stage width={window.innerWidth} height={700}>
          <Sprite
            image={localImages[currentImageIndex].image}
            anchor={0.5} // Set the anchor to the center
            x={window.innerWidth / 2}
            y={350} // Set the y position to the half of the stage height
            scale={{
              x: currentImageIndex === 0 ? 0.7 : 0.4,
              y: currentImageIndex === 0 ? 0.7 : 0.37,
            }} // Conditional scale based on current image index
            onMouseEnter={() => handleMouseEnter(currentImageIndex)}
            onMouseLeave={handleMouseLeave}
          />
        </Stage>
        {hovered && (
          <div className={`tooltip ${hovered ? "show" : ""}`}>
            <h3>{hoveredImageInfo.name}</h3>
            <p>{hoveredImageInfo.description}</p>
          </div>
        )}
      </div>
      <div className="button-container">
        <button
          className="arrow-button left"
          onClick={() => handleSwipe("left")}
        >
          <FaArrowLeft />
        </button>
        <button
          className="arrow-button right"
          onClick={() => handleSwipe("right")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default PixiSlider
