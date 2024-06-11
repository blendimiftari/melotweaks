import React from "react"
import PixiSlider from "../../components/pixiSlider"

const images = [
  "https://img.buzzfeed.com/buzzfeed-static/complex/images/g6ve3p8v23rqcldck2ov/yeezus.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
  "https://img.buzzfeed.com/buzzfeed-static/complex/images/g6ve3p8v23rqcldck2ov/yeezus.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
  "https://img.buzzfeed.com/buzzfeed-static/complex/images/g6ve3p8v23rqcldck2ov/yeezus.jpg?downsize=1840:*&output-format=auto&output-quality=auto",
]

export default function Feed() {
  return (
    <div className="screen-container">
      <PixiSlider />
    </div>
  )
}
