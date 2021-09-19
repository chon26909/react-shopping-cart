const reducer = (state, action) => {

  switch (action.type) {
    case "REMOVE_ITEM":
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != id),
      };

    default:
      break;
  }
};

export default reducer;
