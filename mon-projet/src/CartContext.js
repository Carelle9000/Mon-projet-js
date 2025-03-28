import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

// Création du contexte du panier
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
