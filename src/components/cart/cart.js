import React from "react";
import {connect} from "react-redux";
import "./cart.css";
import CartItem from "../cartItem/cartItem";
import Nav from "../nav2/nav2";
import {clearCart, showOrderForm} from "../../redux/actionCreators";
import OrderForm from "../orderForm/orderForm";

const Cart = ({cartItems, activeCartPage, clearCart, showOrderForm, isOrderFormShowed}) => {

  const onClearCart = () => {
    const cartItemsElems = document.querySelectorAll(".cart-item");

    for (let item of cartItemsElems){
      item.style.animation = "clear-items 0.3s ease-in forwards";
    }

    setTimeout(() => {
      clearCart();
    }, 300);
  }

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

      {  cartItems.length > 0 &&
        <div className="cart__buttons">
          <div className="cart__btn" onClick={onClearCart}><span>Очистить корзину</span></div>
          <div className="cart__btn" onClick={showOrderForm}><span>Оформить заказ</span></div>
        </div>
      }
      {
        isOrderFormShowed && <OrderForm />
      }


    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartItems:state.cartItems,
    activeCartPage:state.activeCartPage,
    isOrderFormShowed:state.isOrderFormShowed
  }
}

const mapDispatchToProps = {
  clearCart,
  showOrderForm
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
