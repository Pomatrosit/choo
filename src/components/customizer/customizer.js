import React from "react";
import "./customizer.css";
import {connect} from "react-redux";
import PizzaBtns from "../customizerButtons/pizzaButtons";
import BurgerBtns from "../customizerButtons/burgerBtns";
import RollBtns from "../customizerButtons/rollbtns";
import WokBtns from "../customizerButtons/wokBtns";
import {changeCustomizerCounter, calculateCustomizerPrice, addToCart} from "../../redux/actionCreators"

const Customizer = ({activeGoodsItem, goods, activeCategory, customizerPrice, customizerCounter,
  changeCustomizerCounter, calculateCustomizerPrice, addToCart})=>{

  let imgURL = ""; let title="";let categoryCaption=""; let customizerButtons="";

  for (let good of goods){
    if (activeGoodsItem && good.id === activeGoodsItem.toString()) {
      imgURL = `./img/${good.img}`;
      title = good.title;
    }
  }

  switch (activeCategory) {
    case "pizza":
        categoryCaption="Пицца";
        customizerButtons=<PizzaBtns />;
        break;
    case "burger":
        categoryCaption="Сэндвич";
        customizerButtons=<BurgerBtns />;
        break;
    case "roll":
        categoryCaption="Роллы";
        customizerButtons=<RollBtns />;
        break;
    case "wok":
        categoryCaption="Лапша";
        customizerButtons=<WokBtns />;
        break;

    default:break;
  }

  const plusMinusClickHandler = num => {
    changeCustomizerCounter(num)
  }

  const customizerClickHandler = (e) => {
    if (e.target.closest(".customizer__btn") || e.target.closest(".customizer__swipe")){
      calculateCustomizerPrice();
    }
  }

  return(
    <div className = "customizer">
        {activeGoodsItem
          ?
          <div className="customizer-inner" onClick={customizerClickHandler}>

            <div className ="customizer__description-block">
              <div className = "customizer__description">
                 <p className = "customizer__category">{categoryCaption}</p>
                 <p className = "customizer__title">{title}</p>
                 <p className = "customizer__price">{customizerPrice}&nbsp;₽</p>
              </div>
              <img className = "customizer__img" src={imgURL} alt="123"/>
            </div>

            <div className="customizer__buttons-block">
                { customizerButtons }
            </div>

            <div className="customizer__bth-group">
               <div className="customizer__plus-minus-block">
                 <div className="customizer__btn customuzer__minus-btn"
                 onClick = {() => plusMinusClickHandler(-1)}
                 ><span>-</span></div>
                 <span className="customuzer__count">{customizerCounter}</span>
                 <div className="customizer__btn customuzer__plus-btn"
                 onClick = {() => plusMinusClickHandler(1)}
                 ><span>+</span></div>
               </div>
               <div className="customizer__btn to-cart-btn"
                    onClick={() => addToCart()}
                    ><span>Добавить в заказ</span></div>
            </div>

          </div>

          : null
        }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    activeGoodsItem:state.activeGoodsItem,
    goods:state.goods,
    activeCategory:state.activeCategory,
    customizerPrice:state.customizerPrice,
    customizerCounter:state.customizerActiveBtns.customizerCounter
  }
}

const mapDispatchToProps = dispatch => {
  return{
    changeCustomizerCounter: num => dispatch(changeCustomizerCounter(num)),
    calculateCustomizerPrice:() => dispatch(calculateCustomizerPrice()),
    addToCart:() => dispatch(addToCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customizer);
