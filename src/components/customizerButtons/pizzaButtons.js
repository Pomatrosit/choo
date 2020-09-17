import React from "react";
import CustomizerBtn from "../customizerBtn/customizerBtn";
import {connect} from "react-redux";
import {setPizzaThickness, setPizzaDiameter} from "../../redux/actionCreators";

const PizzaBtns = ({customizerActiveBtns, setPizzaThickness, setPizzaDiameter}) => {
  return(
    <>
         <div className="customizer__bth-group">
             <CustomizerBtn
                clickHandler = {setPizzaThickness}
                activeBtn = {customizerActiveBtns.pizzaThickness}
                text = "Стандартное тесто" data ={1} width="48%"/>
             <CustomizerBtn
                 clickHandler = {setPizzaThickness}
                 activeBtn = {customizerActiveBtns.pizzaThickness}
                 text = "Тонкое тесто" data ={2} width="48%" />
         </div>
         <div className="customizer__bth-group">
             <CustomizerBtn
                 clickHandler = {setPizzaDiameter}
                 activeBtn = {customizerActiveBtns.pizzaDiameter}
                 text="30см" data ={1} width="31%" />
             <CustomizerBtn
                 clickHandler = {setPizzaDiameter}
                 activeBtn = {customizerActiveBtns.pizzaDiameter}
                 text="35см" data ={2} width="31%" />
             <CustomizerBtn
                 clickHandler = {setPizzaDiameter}
                 activeBtn = {customizerActiveBtns.pizzaDiameter}
                 text="45см" data ={3} width="31%" />
         </div>
     </>
  )
}

const mapStateToProps = state => {
  return{
    customizerActiveBtns:state.customizerActiveBtns
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setPizzaThickness:id => dispatch(setPizzaThickness(id)),
    setPizzaDiameter:id => dispatch(setPizzaDiameter(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBtns);
