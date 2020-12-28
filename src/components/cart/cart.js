import React from "react";
import {connect} from "react-redux";
import "./cart.css";
import CartItem from "../cartItem/cartItem";
import Nav from "../nav2/nav2";

const Cart = ({cartItems, activeCartPage}) => {

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
      <div className="cart__items" style={{transform:`translateX(-${(activeCartPage-1)}00%)`}}>
          {cartItemsToHtml}
      </div>
      <Nav />

      {  cartItems.length &&
        <div className="cart__buttons">
          <div className="cart__btn"><span>Очистить корзину</span></div>
          <div className="cart__btn"><span>Оформить заказ</span></div>
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


export default connect(mapStateToProps)(Cart);
