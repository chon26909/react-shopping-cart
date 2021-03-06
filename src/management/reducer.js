const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };

    case "TOGGLE_QUANTITY":

      let newCart = state.cart.map((item) => {

        if (item.id === action.payload.id) {

          if (action.payload.type === "increment") {
         
            return {
              ...item,
              quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
            };

          } else if (action.payload.type === "decrement") {
     
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
      return {
        ...state,
        cart: newCart
      };

    case "CALCULATE_TOTAL":

        const initialSum = {
            total: 0,
            amount: 0
        }

        const { total, amount } = state.cart.reduce((sum, item) => {
            const { price, quantity } = item;
            const itemTotal = price * quantity;
            sum.total += itemTotal;
            sum.amount += quantity;
            return sum
        }, initialSum);

        return {
            ...state,
            total: total,
            amount: amount
        }

    default:
      break;
  }
};

export default reducer;
