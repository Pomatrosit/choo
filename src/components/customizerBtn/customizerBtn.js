import React from "react";
import "./customizerBtn.css";

const CustomizerBtn = ({text, width, data, activeBtn, clickHandler}) => {

  const classes = ["customizer__btn"];
  if (activeBtn === data) classes.push("customizer__btn--active");

  return(
    <div onClick = {() => clickHandler(data)}
       style ={{width}} className={classes.join(" ")} data= "1">
       <span>{text}</span>
    </div>
  )
}

export default CustomizerBtn;
