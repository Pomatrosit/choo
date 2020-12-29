export function setActiveCategory(category){
  return{
    type:"SET_ACTIVE_CATEGORY",
    payload:category
  }
}

export function setGoods(goods){
  return{
    type:"SET_GOODS",
    payload:goods
  }
}

export function setActiveGoodsPage(page){
  return{
    type:"SET_ACTIVE_GOODS_PAGE",
    payload:page
  }
}

export function setActiveGoodsItem(id){
  return{
    type:"SET_ACTIVE_GOOD_ITEM",
    payload:id
  }
}

export function setCustomizerPrice(price){
  return{
    type:"SET_CUSTOMIZER_PRICE",
    payload:price
  }
}

export function setPizzaThickness(id){
  return{
    type:"SET_PIZZA_THICKNESS",
    payload:id
  }
}

export function setPizzaDiameter(id){
  return{
    type:"SET_PIZZA_DIAMETER",
    payload:id
  }
}

export function setBurgerBeefs(id){
  return{
    type:"SET_BURGER_BEEFS",
    payload:id
  }
}

export function setRollCount(id){
  return{
    type:"SET_ROLL_COUNT",
    payload:id
  }
}

export function setWokWeight(id){
  return{
    type:"SET_WOK_WEIGHT",
    payload:id
  }
}

export function toggleRollAdditions(){
  return{
    type:"TOGGLE_ROLL_ADDITIONS"
  }
}

export function resetCustomizer(){
  return{
    type:"RESET_CUSTOMIZER"
  }
}

export function changeCustomizerCounter(num){
  return{
    type:"CHANGE_CUSTOMIZER_COUNTER",
    payload:num
  }
}

export function calculateCustomizerPrice(){
  return{
    type:"CALCULATE_CUSTOMIZER_PRICE"
  }
}

export function addToCart(){
  return{
    type:"ADD_TO_CART"
  }
}

export function removeCartItem(id){
  return{
    type:"REMOVE_CART_ITEM",
    payload:id
  }
}

export function plusCartItem(id){
  return{
    type:"PLUS_CART_ITEM",
    payload:id
  }
}

export function minusCartItem(id){
  return{
    type:"MINUS_CART_ITEM",
    payload:id
  }
}

export function setActiveCartPage(page){
  return{
    type:"SET_ACTIVE_CART_PAGE",
    payload:page
  }
}

export function clearCart(){
  return{
    type:"CLEAR_CART"
  }
}
