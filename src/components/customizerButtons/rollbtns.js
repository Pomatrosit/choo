import React from "react";
import {connect} from "react-redux";
import {setRollCount, toggleRollAdditions} from "../../redux/actionCreators";
import CustomizerBtn from "../customizerBtn/customizerBtn";
import "./rollSwipe.css";

const RollBtns = ({customizerActiveBtns, setRollCount, toggleRollAdditions}) => {

  const swipeClasses = ["customizer__swipe"];
  if (customizerActiveBtns.rollAdditions) swipeClasses.push("active-swipe");
  else swipeClasses.push("unactive-swipe");

  return(
    <>
         <div className="customizer__bth-group">
             <CustomizerBtn
                clickHandler = {setRollCount}
                activeBtn = {customizerActiveBtns.rollCount}
                text = "8 штук" data ={1} width="48%"/>
             <CustomizerBtn
                 clickHandler = {setRollCount}
                 activeBtn = {customizerActiveBtns.rollCount}
                 text = "12 штук" data ={2} width="48%" />
         </div>
         <div className="customizer__swipe-group ">
             <p className="customizer__caption">Доп. васаби и соус</p>
             <div className={swipeClasses.join(" ")} onClick={toggleRollAdditions}>
                  <div className="swipe-inner">
                      <div className="swipe__dot"></div>
                      <div className="swipe__dot"></div>
                      <div className="swipe__dot"></div>
                      <div className="swipe__dot"></div>
                  </div>
                  <div className="swipe-light"></div>
             </div>
         </div>
     </>
  )
}

const mapStateToProps = state => {
  return{
    customizerActiveBtns:state.customizerActiveBtns
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setRollCount:id => dispatch(setRollCount(id)),
    toggleRollAdditions: () => dispatch(toggleRollAdditions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollBtns);
