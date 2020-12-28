import React from "react";
import {connect} from "react-redux";
import "./cart.css";
import CartItem from "../cartItem/cartItem";

const Cart = ({cartItems}) => {

  const cartItemsToHtml = cartItems.map(cartItem=> (
    <CartItem key={cartItem.key}
              id={cartItem.id}
              goodId={cartItem.goodId}
              count={cartItem.count} title={cartItem.title}
              price={cartItem.price} description={cartItem.description}/>
  ));

  let cartPrice = 0 ;
  for (let cartItem of cartItems){
     cartPrice += cartItem.price;
  }

  return(
    <div className="cart">
      <p className="cart__price">Ваш заказ | Итого: {cartPrice}&nbsp;₽</p>
      <div className="cart__items">
          {cartItemsToHtml}
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartItems:state.cartItems
  }
}


export default connect(mapStateToProps)(Cart);
