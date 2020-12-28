import React, {useRef} from "react";
import "./cartItem.css";
import {removeCartItem, changeCartItemCouner} from "../../redux/actionCreators";
import {connect} from "react-redux";

const CartItem = ({title, price, description, id, count, removeCartItem}) => {

  const item = useRef();

  const deleteHandler = () => {
    item.current.style.animation = "hide-item 0.5s ease-in forwards";
    setTimeout(() => {
      removeCartItem(id);
    }, 500);
  }

  return(
    <div className="cart-item" ref = {item}>
        <div className="cart-item__left">
           <div className="cart-item__title">{title}</div>
           <div className="cart-item__description">{description}</div>
           <div className="cart-item__price-and-count">
               <div className="cart-item__price">{price}&nbsp;₽</div>
               <div className="cart-item__count">{count} шт</div>
           </div>

           <div className="cart-item__cross" onClick={deleteHandler}>
               <div className="cross__span cross__span1"></div>
               <div className="cross__span cross__span2"></div>
           </div>

        </div>
        <div className="cart-item__right">
            <div className="cart-item__plus" onClick = {() => changeCartItemCouner(1)}>+</div>
            <div className="cart-item__minus" onClick = {() => changeCartItemCouner(-1)}>-</div>
        </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    removeCartItem:id => dispatch(removeCartItem(id)),
    changeCartItemCouner: num => dispatch(changeCartItemCouner(num))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
