import React from "react";
import CategoryItem from "./categoryItem/categoryItem";

const Categories = () => {
  return(
    <div style = {{
      width:"28%",
      height:"20rem",
      marginLeft:"-31%",
      display:"flex",
      flexWrap:"wrap",
      textAlign:"center",
      justifyContent:"center"
    }}>
      <CategoryItem id="pizza" alt="pizza" key="pizza" title = "Пицца" img="./img/PIZZA.png"/>
      <CategoryItem id="roll" alt="roll" key="roll" title = "Роллы" img="./img/roll.png"/>
      <CategoryItem id="burger" alt="burger" key="burger" title = "Бургеры" img="./img/BURGER.png"/>
      <CategoryItem id="wok" alt="wok" key="wok" title = "WOK" img="./img/UDON.png"/>
    </div>
  )
}

export default Categories;
