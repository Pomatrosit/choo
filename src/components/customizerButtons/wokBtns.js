import React from "react";
import CustomizerBtn from "../customizerBtn/customizerBtn";
import {connect} from "react-redux";
import {setWokWeight} from "../../redux/actionCreators";

const WokBtns = ({customizerActiveBtns, setWokWeight}) => {
  return(
    <>
         <div className="customizer__bth-group">
             <CustomizerBtn
                clickHandler = {setWokWeight}
                activeBtn = {customizerActiveBtns.wokWeight}
                text = "300 грамм" data ={1} width="48%"/>
             <CustomizerBtn
                 clickHandler = {setWokWeight}
                 activeBtn = {customizerActiveBtns.wokWeight}
                 text = "600 грамм" data ={2} width="48%" />
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
    setWokWeight:id => dispatch(setWokWeight(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WokBtns);
