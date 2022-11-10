import React from "react";
import "../Style/Section.scss";
import {motion} from "framer-motion"


const Section = ({
  h3,
  text,
  hasBtn = true,
  imgSrc,
  btnTxt,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {

// heading motions .....

const headingOptions = {
  initial:{
    y:"-100%",
    opacity:0
  },
  whileInView:{
    y:0,
    opacity:1
  }


}

const textOption  = {
  ...headingOptions,
  transition:{
    deley:0.3
  }
}

const buttonOptions  = {
  initial:{
    y:"100%",
    opacity:0
  },
  whileInView:{
    y:0,
    opacity:1
  },
  transition:{
    deley:0.3,
    ease:"easeIn"
  }
}

const imgOptions  = {
  initial:{
    scale:0.3,
    opacity:0
  },
  whileInView:{
    scale:1,
    opacity:1
  },
  transition:{
    deley:0.3,
  }
}











  return (
    <section className="section" style={{ backgroundColor }}>
      <div>
        <motion.h3 data-cursorpointer = {true} {...headingOptions} style={{ color: headingColor }}>{h3}</motion.h3>

        <motion.p data-cursorpointer = {true} {...textOption} style={{ color: textColor }}>{text}</motion.p>

        {hasBtn && (
          <motion.button {...buttonOptions} data-cursorpointer = {true} style={{ color: btnColor, backgroundColor: btnBgColor }}>
            {btnTxt}
          </motion.button>
        )}

        <motion.div {...imgOptions}>
          <img  src={imgSrc} alt="imgSrc" style={{ width: imgSize }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
