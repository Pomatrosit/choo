import React, {useRef} from "react";
import "./cartItem.css";
import {removeCartItem, plusCartItem, minusCartItem} from "../../redux/actionCreators";
import {connect} from "react-redux";

const CartItem = ({title, price, description, id, count, removeCartItem, plusCartItem, minusCartItem}) => {

  const item = useRef();

  const deleteHandler = () => {
    item.current.style.animation = "hide-item 0.5s ease-in forwards";

    const nextGood1 = item.current.nextElementSibling;
    let nextGood2;
    if (nextGood1) nextGood2 = nextGood1.nextElementSibling;
    let nextGood3;
    if (nextGood2) nextGood3 = nextGood2.nextElementSibling;
    const nextGoodsArr = [nextGood1, nextGood2, nextGood3];
    nextGoodsArr.forEach(el => {
      if(el) el.style.animation = "none";
    });

    setTimeout(() => {
      nextGoodsArr.forEach(el => {
        if(el) el.style.animation = "shift-item 0.3s cubic-bezier(.66,.09,.52,.85) forwards";
      });
    }, 500);

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
            <div className="cart-item__plus" onClick = {() => plusCartItem(id)}><span>+</span></div>
            <div className="cart-item__minus" onClick = {() => minusCartItem(id)}><span>-</span></div>
        </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    removeCartItem:id => dispatch(removeCartItem(id)),
    plusCartItem:id => dispatch(plusCartItem(id)),
    minusCartItem:id => dispatch(minusCartItem(id))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
