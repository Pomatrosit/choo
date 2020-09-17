import React from "react";
import "./goodItem.css";
import {connect} from "react-redux";
import {setActiveGoodsItem, setCustomizerPrice, resetCustomizer} from "../../redux/actionCreators"

const GoodItem = props => {

  const classes = ["goods-item"];
  if (props.activeGoodsItem === props.id) classes.push("active-goods-item");

  const clickHandler = () => {
    props.setActiveGoodsItem(props.id);
    props.setCustomizerPrice(props.price);
    props.resetCustomizer();
  }

  return(
    <div className ={classes.join(" ")} data-id={props.id} onClick={clickHandler}>
      <div className = "goods-item__content">
          <div className="goods-item__title-and-price">
             <h4 className="goods-item__title">{props.title}</h4>
             <p className="goods-item__price">{props.price}&nbsp;₽</p>
          </div>
          <div className="goods-item__description">{props.description}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    activeGoodsItem:state.activeGoodsItem
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setActiveGoodsItem: id => dispatch(setActiveGoodsItem(id)),
    setCustomizerPrice:price => dispatch(setCustomizerPrice(price)),
    resetCustomizer:() => dispatch(resetCustomizer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodItem);
