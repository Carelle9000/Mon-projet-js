export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { cart: [...state.cart, action.payload] };

        case "REMOVE_ITEM":
            return {
                cart: state.cart.filter(item => item.id !== action.payload),
            };

        case "CLEAR_CART":
            return { cart: [] };

        default:
            return state;
    }
};
