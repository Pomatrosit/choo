import React from "react";
import "./categoryItem.css";
import {connect} from "react-redux";
import {setActiveCategory, setActiveGoodsPage, setActiveGoodsItem} from "../../redux/actionCreators";

const CategoryItem = ({alt, title, img, id, activeCategory, setActiveCategory,
                        setActiveGoodsPage, setActiveGoodsItem}) => {

  const styles=["category-item"];
  if (activeCategory === id) styles.push("active-category-item");

  const clickHandler = () => {
    setActiveCategory(id);
    setActiveGoodsPage(1);
    setActiveGoodsItem(null);
  }

  return(
    <div className = {styles.join(" ")} onClick = {clickHandler}>
       <div className = "category-item__content">
         <img src={img} alt={alt} className = "category-item__img"/>
         <h2 className = "category-item__title">{title}</h2>
       </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    setActiveCategory: category => dispatch(setActiveCategory(category)),
    setActiveGoodsPage: page => dispatch(setActiveGoodsPage(page)),
    setActiveGoodsItem: id => dispatch(setActiveGoodsItem(id))
  }
}

const mapStateToProps = state => {
  return{
    activeCategory:state.activeCategory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
