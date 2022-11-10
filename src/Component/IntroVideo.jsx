import React from 'react'
import vedio from "../Assets/MBA Chai Wala.mp4"
import "../Style/Into.scss"



const IntroVideo = () => {
  return (
    <div className="into">
        <video src={vedio} muted autoPlay loop controlsList='nodownloads'>

        {/* <div></div> */}
          
        </video>
    </div>
  )
}

export default IntroVideo