import { useState } from "react";
import { useShoppingCart } from "../global_components/context/context";

export const Quantity_input = ({ quantity, id }) => {
  const { cartItems, setCartitems } = useShoppingCart();
  const [input, setInput] = useState(quantity);

  return (
    <input
      type="number"
      name="quantity"
      id="quantity"
      value={input}
      onChange={(e) => {
        if (e.target.value <= -1) {
          setInput(1);
        } else {
          setInput(e.target.value);
          let cart = cartItems.map((i) => {
            return i.id === id ? { ...i, quantity: Number(e.target.value) } : i;
          });
          setCartitems([...cart]);
        }
      }}
    />
  );
};
