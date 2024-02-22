import { useShoppingCart } from "../global_components/context/context";
import { icons } from "../global_components/data/info";
import { Link } from "react-router-dom";
import { Quantity_input } from "./input";

export const Cart_body = () => {
  const {
    cartItems,
    get_cart_subtotal,
    get_shipping_price,
    get_cart_total,
    setCartitems,
    remove_from_cart,
  } = useShoppingCart();
  return (
    <>
      <div className="wrapper container">
        <div className="cart_container">
          <div className="cart_body">
            <div className="box header">
              <div>
                <h3>image</h3>
              </div>
              <div>
                <h3>name</h3>
              </div>
              <div>
                <h3>price</h3>
              </div>
              <div>
                <h3>quantity</h3>
              </div>
              <div>
                <h3>sub-total</h3>
              </div>
              <div>
                <h3>remove</h3>
              </div>
            </div>
            {/*  */}
            {cartItems.map((i, key) => {
              return (
                <div className="box cart_item" key={key}>
                  <div className="img_con">
                    <img src={i.img} alt="img" />
                  </div>

                  <div className="name">
                    <p>{i.name}</p>
                  </div>
                  <div className="price">
                    <p>{i.cur_price}</p>
                  </div>
                  <div className="quantity">
                    <Quantity_input quantity={i.quantity} id={i.id} />
                  </div>
                  <div className="subtotal">
                    <p>${i.cur_price.replace("$", "") * i.quantity}.00</p>
                  </div>
                  <div
                    className="remove_btn"
                    onClick={() => remove_from_cart(i.id)}
                  >
                    {icons.delete_icon}
                  </div>
                </div>
              );
            })}
            {/*  */}
          </div>

          <div className="action_btns">
            <Link to={"/shop"}>
              <button>{icons.cart_icon} continue shopping</button>
            </Link>
            <button onClick={() => setCartitems([])}>
              {icons.close_icon} clear cart
            </button>
          </div>
        </div>

        <div className="checkout_section">
          <div className="shipping_section">
            <div className="part1">
              <h4>calculate shipping</h4>
              <form action="#">
                <input type="text" placeholder="State/Country" />
                <div className="input_con">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="Postcode/Zip" />
                </div>
                <button>{icons.update_icon}update</button>
              </form>
            </div>
            <div className="part2">
              <h4>calculate shipping</h4>
              <form action="#">
                <input type="text" placeholder="State/Country" />

                <button>{icons.paste_icon}apply</button>
              </form>
            </div>
          </div>
          <div className="total_section">
            <h4>cart tool</h4>

            <div className="box">
              <p>cart subtotal</p>
              <p>${get_cart_subtotal()}.00</p>
            </div>
            <div className="box">
              <p>shiping</p>
              <p>${get_shipping_price()}.00</p>
            </div>
            <div className="box">
              <p>total</p>
              <p>${get_cart_total()}.00</p>
            </div>

            <Link to={"/checkout"}>
              <button>{icons.paste_icon}proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
