//exercice 1: Fonction Horloge

/*import Clock from "./Clock";

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Clock />
        </div>
    );
}

export default App;*/


//exercice 2: Fonction Liste d'articles
/*import PostList from "./PostList";

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <PostList />
        </div>
    );
}

export default App;
*/

//exercice 3: Fonction Formulaire de connexion

/*import { AuthProvider } from "./AuthContext";
import AuthButton from "./AuthButton";

function App() {
    return (
        <AuthProvider>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <AuthButton />
            </div>
        </AuthProvider>
    );
}

export default App;
*/

//exercice 4: Fonction Formulaire de gestion des articles d'une  boutique en ligne
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import Product from "./Product";

function App() {
    const products = [
        { id: 1, name: "Ipad" },
        { id: 2, name: "AirPods Pro max" },
        { id: 3, name: "Iphone" },
    ];

    return (
        <CartProvider>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-4">🛍️ Apple Cameroun</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>

                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
