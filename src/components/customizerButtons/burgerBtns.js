import React from "react";
import {connect} from "react-redux";
import {setBurgerBeefs} from "../../redux/actionCreators";
import CustomizerBtn from "../customizerBtn/customizerBtn";

const BurgerBtns = ({customizerActiveBtns,setBurgerBeefs}) => {
  return(
    <>
         <div className="customizer__bth-group">
             <CustomizerBtn
                clickHandler = {setBurgerBeefs}
                activeBtn = {customizerActiveBtns.burgerBeefs}
                text = "Одна котлета" data ={1} width="48%"/>
             <CustomizerBtn
                 clickHandler = {setBurgerBeefs}
                 activeBtn = {customizerActiveBtns.burgerBeefs}
                 text = "Две котлеты" data ={2} width="48%" />
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
    setBurgerBeefs:id => dispatch(setBurgerBeefs(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBtns);
