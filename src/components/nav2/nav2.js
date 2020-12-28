import React from "react";
import "./nav2.css";
import {connect} from "react-redux";
import arrow from "../../img/Vector.png";
import {setActiveCartPage} from "../../redux/actionCreators";

const Nav2 = ({cartItems, activeCartPage, setActiveCartPage}) => {

  const pointsCount = Math.ceil((cartItems.length/3));
  const points = [];

  for (let i=1; i <= pointsCount; i++){
    const classes = ["nav2-point"];
    if (activeCartPage === i ) {
      classes.push("active-nav2-point");
    }
    points.push(
      <div className={classes.join(" ")}
           key={i}
           onClick = {() => setActiveCartPage(i)}>
      </div>
    )
  }

  const arrowLeftClasses=["arrow-left", "nav2-arrow"];
  const arrowRightClasses=["arrow-right", "nav2-arrow"];

  if (activeCartPage>1) arrowLeftClasses.push("arrow-active");
  if (activeCartPage < pointsCount) arrowRightClasses.push("arrow-active");

  const arrowClickHandler = (e) => {
    const arrow = e.target.closest(".nav2-arrow");
    if (arrow.classList.contains("arrow-active")){
      if (arrow.classList.contains("arrow-right")) setActiveCartPage(activeCartPage+1);
      else if (arrow.classList.contains("arrow-left")) setActiveCartPage(activeCartPage-1)
    }
  }

  return(
    <div>
      {cartItems.length <=3
          ? null
          :
          <div className="nav2">
              <div className = {arrowLeftClasses.join(" ")} onClick = {arrowClickHandler}>
                 <img src={arrow} alt="arrow" style = {{transform:"rotate(180deg)"}}/>
              </div>
              <div className="nav2-points">
                 { points }
              </div>
              <div className = {arrowRightClasses.join(" ")} onClick = {arrowClickHandler}>
                 <img src={arrow} alt="arrow"/>
              </div>
          </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartItems:state.cartItems,
    activeCartPage:state.activeCartPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveCartPage: page => dispatch(setActiveCartPage(page))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav2)
