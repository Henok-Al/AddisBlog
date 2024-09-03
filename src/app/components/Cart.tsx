"use client";

import { useCart } from "@/lib/contexts/CartContext";


const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;