import "./cart.scss";
import img from "../../assets/product1.jpg";
import { icons } from "../../global_components/info";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="cart_section">
      <div className="heading">
        <div className="container">
          <h2>home</h2>
          <h2>/</h2>
          <h2>your cart</h2>
        </div>
      </div>

      <div className="wrapper container">
        <div className="cart_container">
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
              <h3>quality</h3>
            </div>
            <div>
              <h3>sub-total</h3>
            </div>
            <div>
              <h3>remove</h3>
            </div>
          </div>
          <div className="box cart_item">
            <div className="img_con">
              <img src={img} alt="img" />
            </div>

            <div className="name">
              <p>t-shirt</p>
            </div>
            <div className="price">
              <p>$7484</p>
            </div>
            <div className="quantity">
              <input type="number" name="amount" id="amount" value={1} />
            </div>
            <div className="subtotal">
              <p>$7843</p>
            </div>
            <div className="remove_btn">{icons.delete_icon}</div>
          </div>
          <div className="action_btns">
            <Link to={"/shop"}>
              {" "}
              <button>{icons.cart_icon} continue shopping</button>
            </Link>
            <button>{icons.close_icon} clear cart</button>
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
              <p>$345555</p>
            </div>
            <div className="box">
              <p>cart subtotal</p>
              <p>$345555</p>
            </div>
            <div className="box">
              <p>shiping</p>
              <p>$345555</p>
            </div>
            <div className="box">
              <p>total</p>
              <p>$345555</p>
            </div>

            <button>{icons.paste_icon}proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
