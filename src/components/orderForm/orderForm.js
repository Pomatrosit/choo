import React from "react";
import "./orderForm.css";
import {closeOrderForm} from "../../redux/actionCreators";
import {connect} from "react-redux";

const OrderForm = ({closeOrderForm}) => {
  return(
    <div className="order">
      <h3 className="order-caption">Оформление заказа</h3>

       <form className="order-form">

          <div className="order-input-name order-input">
              <input type="text" name="name" placeholder="Ваше имя" className="order-name inp" maxLength="25" />
              <img className="order-icon" src="/img/name.svg" alt="name" />
          </div>

          <div className="order-input-phone order-input">
              <input type="phone" name="phone" className="order-phone inp" placeholder="Ваш телефон" />
              <img className="order-icon phone-icon" src="/img/phone.svg" alt="phone" />
          </div>

          <div className="order-input-address order-input">
                <textarea name="address" rows="8" cols="80" className="cart-address inp" placeholder="Ваш адрес"
                maxLength="150"></textarea>
                <img className="order-icon address-icon" src="/img/address.svg" alt="address" />
          </div>
       </form>

       <div className="cart__buttons">
         <div className="cart__btn" onClick = {closeOrderForm}><span>Вернуться в корзину</span></div>
         <div className="cart__btn"><span>Отправить</span></div>
       </div>
    </div>
  )
}

const mapDispatchToProps = {
  closeOrderForm
}


export default connect(null, mapDispatchToProps)(OrderForm)
