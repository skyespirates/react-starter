import { ADD_PRODUCT, REMOVE_PRODUCT, DECREMENT, INCREMENT } from "./actions";
const reducers = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return;
    case REMOVE_PRODUCT:
      const newProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, products: newProduct };
    case DECREMENT:
      const producDec = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty - 1 }
          : product
      );
      return { ...state, products: producDec };
    case INCREMENT:
      const producInc = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty + 1 }
          : product
      );
      return { ...state, products: producInc };
    default:
      return state;
  }
};
export default reducers;
