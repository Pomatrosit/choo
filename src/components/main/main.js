import React from "react";
import "./main.css";
import Goods from "../goods/goods";
import Categories from "../categories";
import Customizer from "../customizer/customizer";
import Cart from "../cart/cart";

const Main = () => {
  return(
    <div className="main">
       <Goods />
       <Categories />
       <Customizer />
       <Cart />
    </div>
  )
}

export default Main;
