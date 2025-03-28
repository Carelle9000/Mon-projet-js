import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
    const { cart, dispatch } = useContext(CartContext);

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">🛒 Mon Panier</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide.</p>
            ) : (
                <ul className="space-y-2">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between border-b pb-2">
                            <span>{item.name}</span>
                            <button 
                                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })} 
                                className="text-red-500 hover:text-red-700"
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <button 
                onClick={() => dispatch({ type: "CLEAR_CART" })} 
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
            >
                🗑️ Vider le panier
            </button>
        </div>
    );
}

export default Cart;
