import React, {useState, useEffect} from "react";
import "./goods.css";
import Nav from "../nav/nav";
import GoodItem from "../goodItem/goodItem";
import {connect} from "react-redux";
import {setGoods} from "../../redux/actionCreators";
import Loader from "../../UI/loader";

const Goods = ({activeCategory, setGoods, goods, activeGoodsPage}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://choo-80445.firebaseio.com/goods/${activeCategory}.json`)
      .then(response => response.json())
      .then(data => {

        const goodsArr = [];

        for (let good in data){
          if (data[good] !== null){
            data[good].id = good.toString();
            goodsArr.push(data[good]);
          }
        }

        setGoods(goodsArr);
        setLoading(false);
      })
  },[activeCategory, setGoods]);



  const goodsArr = goods.map((good, index) => {
    return(
      <GoodItem
          title = {good.title}
          price={good.price30 || good.price || good.price8 || good.price300}
          description={good.description}
          key={good.id}
          id ={good.id}
          index={index}
      />
    )
  });

  const goodsWrapperStyle = {
    transform:`translateX(-${(activeGoodsPage-1)}00%)`
  }

  return(
    <div className="goods">
      <div className="goods-wrapper" style = {goodsWrapperStyle}>

        {loading ? <Loader /> : goodsArr}

      </div>
      <Nav />
    </div>
  )
}


const mapStateToProps = state => {
  return{
    activeCategory:state.activeCategory,
    goods:state.goods,
    activeGoodsPage:state.activeGoodsPage
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setGoods: goods => dispatch(setGoods(goods))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods)
