const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != id),
      };

    case "TOGGLE_QUANTITY":

      let newCart = state.cart.map((item) => {

        if (item.id === action.payload.id) {
          if (action.payload.type === "increment") {
              console.log("increment ")
            return {
              ...item,
              quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
            };
          } else if (action.payload.type === "decrement") {
              console.log("decrement")
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      }).filter((item) => item.quantity !== 0);
      return {
        ...state,
        cart: newCart
      };

    default:
      break;
  }
};

export default reducer;
