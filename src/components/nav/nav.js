import React from "react";
import "./nav.css";
import {connect} from "react-redux";
import arrow from "../../img/Vector.png";
import {setActiveGoodsPage} from "../../redux/actionCreators";

const Nav = ({goods, activeGoodsPage, setActiveGoodsPage}) => {

  const pointsCount = Math.ceil((goods.length/4));
  const points = [];

  for (let i=1; i <= pointsCount; i++){
    const classes = ["nav-point"];
    if (activeGoodsPage === i ) {
      classes.push("active-nav-point");
    }
    points.push(
      <div className={classes.join(" ")}
           key={i}
           onClick = {() => setActiveGoodsPage(i)}>
      </div>
    )
  }

  const arrowLeftClasses=["arrow-left", "nav-arrow"];
  const arrowRightClasses=["arrow-right", "nav-arrow"];

  if (activeGoodsPage>1) arrowLeftClasses.push("arrow-active");
  if (activeGoodsPage < pointsCount) arrowRightClasses.push("arrow-active");

  const arrowClickHandler = (e) => {
    const arrow = e.target.closest(".nav-arrow");
    if (arrow.classList.contains("arrow-active")){
      if (arrow.classList.contains("arrow-right")) setActiveGoodsPage(activeGoodsPage+1);
      else if (arrow.classList.contains("arrow-left")) setActiveGoodsPage(activeGoodsPage-1)
    }
  }

  return(
    <div>
      {goods.length <=4
          ? null
          :
          <div className="nav">
              <div className = {arrowLeftClasses.join(" ")} onClick = {arrowClickHandler}>
                 <img src={arrow} alt="arrow" style = {{transform:"rotate(180deg)"}}/>
              </div>
              <div className="nav-points">
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
    goods:state.goods,
    activeGoodsPage:state.activeGoodsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveGoodsPage: page => dispatch(setActiveGoodsPage(page))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
