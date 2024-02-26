import "./footer.scss";

import { icons } from "../data/info";
import paymentmethod from "../../assets/payment-method.png";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();

  const showfooterstyle = {
    display: "block",
  };
  const removefooerstyle = {
    display: "none",
  };

  return (
    <footer style={pathname === "/login" ? removefooerstyle : showfooterstyle}>
      <div className="news_letter_con">
        <div className="container">
          <h5>{icons.mail_icon} sign up to newsletter</h5>
          <p>...and recieve $25 coupons for first shopping</p>
          <div className="input_con">
            <input type="text" placeholder="Enter your email..." />{" "}
            <button>subscribe</button>
          </div>
        </div>
      </div>
      <div className="container main">
        <div className="part1 box">
          <div className="logo">
            <h1>
              <span>nova</span>cart
            </h1>
          </div>
          <h3>contact</h3>
          <p>
            <span>Address:</span> 7 lekki, lagos
          </p>
          <p>
            <span>Phone:</span> +2348101330834, +234910133784
          </p>
          <p>
            <span>Hours:</span> 6:00am - 11:00pm
          </p>

          <h3>follow</h3>
          <div className="social">
            {icons.facebook_icon}
            {icons.twitter_icon}
            {icons.instagram_icon}
          </div>
        </div>
        <div className="part2 box">
          <h4>Address</h4>
          <p>about us</p>
          <p>delivery information</p>
          <p>privacy policy</p>
          <p>terms and condition</p>
          <p>contact us</p>
        </div>
        <div className="part3 box">
          <h4>my account</h4>
          <p>sign in</p>
          <p>view cart</p>
          <p>my wishlist</p>
          <p>my orders</p>
          <p>help</p>
        </div>
        <div className="part4 box">
          <h4>secured payment gateways</h4>
          <div className="img_con">
            <img src={paymentmethod} alt="img" />
          </div>
        </div>
      </div>
    </footer>
  );
};
