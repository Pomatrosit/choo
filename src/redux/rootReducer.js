const initialState={
  activeCategory:"pizza",
  goods:[],
  activeGoodsPage:1,
  activeGoodsItem:null,
  customizerPrice:null,
  customizerActiveBtns:{
    pizzaThickness:1,
    pizzaDiameter:1,
    burgerBeefs:1,
    rollCount:1,
    rollAdditions:0,
    wokWeight:1,
    customizerCounter:1
  },
  cartPrice:0,
  cartItems:[],
  activeCartPage:1,
}

export default function rootReducer(state = initialState, action){

  switch (action.type) {

    case "SET_ACTIVE_CATEGORY":{
      return {...state, activeCategory:action.payload};
    }

    case "SET_GOODS":{
      return {...state, goods:action.payload};
    }

    case "SET_ACTIVE_GOODS_PAGE":{
      return {...state, activeGoodsPage:action.payload};
    }

    case "SET_ACTIVE_GOOD_ITEM":{
      return {...state, activeGoodsItem:action.payload};
    }

    case "SET_CUSTOMIZER_PRICE":{
      return {...state, customizerPrice:action.payload};
    }

    case "SET_PIZZA_THICKNESS":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, pizzaThickness:action.payload}};
    }

    case "SET_PIZZA_DIAMETER":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, pizzaDiameter:action.payload}};
    }

    case "SET_BURGER_BEEFS":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, burgerBeefs:action.payload}};
    }

    case "SET_ROLL_COUNT":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, rollCount:action.payload}};
    }

    case "SET_WOK_WEIGHT":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, wokWeight:action.payload}};
    }

    case "TOGGLE_ROLL_ADDITIONS":{
      let rollAdditions = state.customizerActiveBtns.rollAdditions;
      if (rollAdditions) rollAdditions = 0; else rollAdditions=1;
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, rollAdditions}};
    }

    case "RESET_CUSTOMIZER":{
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns,
        pizzaThickness:1,
        pizzaDiameter:1,
        burgerBeefs:1,
        rollCount:1,
        rollAdditions:0,
        wokWeight:1,
        customizerCounter:1
      }};
    }

    case "CHANGE_CUSTOMIZER_COUNTER":{
      if (state.customizerActiveBtns.customizerCounter===1 && action.payload === -1) {
        return state
      }
      const newCounter = state.customizerActiveBtns.customizerCounter + action.payload;
      return {...state, customizerActiveBtns:{...state.customizerActiveBtns, customizerCounter:newCounter}};
    }

    case "CALCULATE_CUSTOMIZER_PRICE":{
      let price=0;

      switch (state.activeCategory){
        case "pizza":
        price=0;
        for (let good of state.goods){
          if (good.id === state.activeGoodsItem) {
            switch(state.customizerActiveBtns.pizzaDiameter){
              case 1: price+=good.price30;break;
              case 2: price+=good.price35;break;
              case 3: price+=good.price45;break;
              default:break;
            }
          }
        }
        price = price * state.customizerActiveBtns.customizerCounter;
        return {...state, customizerPrice:price};

        case "burger":
        price=0;
        for (let good of state.goods){
          if (good.id === state.activeGoodsItem) {
            if (state.customizerActiveBtns.burgerBeefs === 1) price+= good.price;
            else price += good.price + 100;
          }
        }
        price = price * state.customizerActiveBtns.customizerCounter;
        return {...state, customizerPrice:price};

        case "roll":
        price=0;
        for (let good of state.goods){
          if (good.id === state.activeGoodsItem) {
            if (state.customizerActiveBtns.rollCount === 1) price+= good.price8;
            else price += good.price12;
          }
        }
        if (state.customizerActiveBtns.rollAdditions===1) price += 15;
        price = price * state.customizerActiveBtns.customizerCounter;
        return {...state, customizerPrice:price};

        case "wok":
        price=0;
        for (let good of state.goods){
          if (good.id === state.activeGoodsItem) {
            if (state.customizerActiveBtns.wokWeight === 1) price+= good.price300;
            else price += good.price600;
          }
        }
        price = price * state.customizerActiveBtns.customizerCounter;
        return {...state, customizerPrice:price};

        default:return state;
      }
    }




    case "ADD_TO_CART":{
      const cartItem={};
      let description=[];

      switch (state.activeCategory){
        case "pizza":{
          if (state.customizerActiveBtns.pizzaThickness === 1) description.push("Стандартное тесто");
             else description.push("Тонкое тесто");
          if (state.customizerActiveBtns.pizzaDiameter === 1) description.push("30см");
          else if (state.customizerActiveBtns.pizzaDiameter === 2) description.push("35см");
          else description.push("45см");
          break;
        }

        case "burger":{
          if (state.customizerActiveBtns.burgerBeefs === 1) description.push("Одна котлета");
             else description.push("Две котлеты");
          break;
        }

        case "roll":{
          if (state.customizerActiveBtns.rollCount === 1) description.push("8 штук");
             else description.push("12 штук");
          if (state.customizerActiveBtns.rollAdditions === 1) description.push("Доп. васаби и соус");
          break;
        }

        case "wok":{
          if (state.customizerActiveBtns.wokWeight === 1) description.push("300 грамм");
             else description.push("600 грамм");
          break;
        }

        default:break;
      }

      let isItemExists = false;
      let existingItem = null;
      let price = 0;

      for (let cartItem of state.cartItems){
        if (cartItem.description === description.join(" | ") && cartItem.goodId === state.activeGoodsItem ) {
          isItemExists = true;
          existingItem=cartItem;
          price=cartItem.price;
        }
      }

      if (isItemExists){
        price = price / existingItem.count;
        const newCount = existingItem.count + state.customizerActiveBtns.customizerCounter;

        const newItems = state.cartItems.map(item => {
          if (item.id === existingItem.id) {item.count = newCount; item.price=price*newCount;}
          return item;
        });

        return {...state, cartItems:newItems};
      }
      else {
        for (let good of state.goods){
          if (good.id === state.activeGoodsItem) {
            cartItem.title = good.title;
            cartItem.price = state.customizerPrice;
            cartItem.count = state.customizerActiveBtns.customizerCounter;
            cartItem.key = cartItem.id = Date.now();
            cartItem.goodId = state.activeGoodsItem;
          }
        }
        cartItem.description = description.join(" | ");

        const newCartItems = state.cartItems.map(item => item);
        newCartItems.push(cartItem);
        const currentCartPage = Math.ceil((state.cartItems.length + 1) / 3);

        return {...state, cartItems:newCartItems, activeCartPage:currentCartPage};
      }
    }


    case "REMOVE_CART_ITEM":{
      const id = action.payload;
      const newItems = state.cartItems.filter(item => {
        return item.id !== id
      });
      const currentCartPage = Math.ceil((state.cartItems.length - 1) / 3);

      return {...state, cartItems:newItems, activeCartPage:currentCartPage}
    }

    case "PLUS_CART_ITEM":{
      const id = action.payload;
      const newItems = state.cartItems.map(item => {
        if (item.id === id) {
          const onePrice = item.price / item.count;
          item.count++;
          item.price = item.count*onePrice;
        }
        return item
      });
      return {...state, cartItems:newItems}
    }

    case "MINUS_CART_ITEM":{
      const id = action.payload;
      const newItems = state.cartItems.map(item => {
        if (item.id === id) {
          const onePrice = item.price / item.count;
          if(item.count > 1){
            item.count--;
            item.price = item.count*onePrice;
          }
        }
        return item
      });
      return {...state, cartItems:newItems}
    }

    case "SET_ACTIVE_CART_PAGE":{
      return {...state, activeCartPage:action.payload}
    }





    default: return state
  }

}
