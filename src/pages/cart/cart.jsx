import "./cart.scss";
import img from "../../assets/product1.jpg";
import { icons } from "../../global_components/data/info";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../global_components/context/context";
import { Cart_body } from "../../component/cart_body";

export const Cart = () => {
   const { add_to_cart, cartItems } = useShoppingCart();
    window.scroll(0, 0);

  return (
    <div className="cart_section">
      <div className="heading">
        <div className="container">
          <h2>home</h2>
          <h2>/</h2>
          <h2>your cart</h2>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <h1
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: "25px",
            color: "grey",
            fontFamily: "var(--font)",
          }}
        >
          nothing in cart
        </h1>
      ) : (
        <Cart_body />
      )}
    </div>
  );
};
