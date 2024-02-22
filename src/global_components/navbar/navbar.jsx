import "./navbar.scss";
import { icons } from "../data/info";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useShoppingCart } from "../context/context";

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [show_menu, setShow_menu] = useState(false);
  const { cartItems, wishlists } = useShoppingCart();
  const shownavstyle = {
    display: "block",
  };
  const removenavstyle = {
    display: "none",
  };

  return (
    <nav style={pathname === "/login" ? removenavstyle : shownavstyle}>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <h1>
              <span>nova</span>cart
            </h1>
          </Link>
        </div>
        <div className={show_menu ? "navigators active" : "navigators"}>
          <div className="links">
            <span
              className="close_btn"
              onClick={() => setShow_menu(!show_menu)}
            >
              {icons.close_icon}
            </span>
            <NavLink
              activeclassName="active"
              to={"/"}
              onClick={() => setShow_menu(!show_menu)}
            >
              home
            </NavLink>
            <NavLink
              activeclassName="active"
              to="/shop"
              onClick={() => setShow_menu(!show_menu)}
            >
              shop
            </NavLink>
            <NavLink
              activeclassName="active"
              to={"/account"}
              onClick={() => setShow_menu(!show_menu)}
            >
              my account
            </NavLink>
            <NavLink
              activeclassName="active"
              to={"/blog"}
              onClick={() => setShow_menu(!show_menu)}
            >
              blog
            </NavLink>
            <NavLink
              activeclassName="active"
              to={"/contact"}
              onClick={() => setShow_menu(!show_menu)}
            >
              contact
            </NavLink>
            <NavLink
              activeclassName="active"
              to={"/login"}
              onClick={() => setShow_menu(!show_menu)}
            >
              login
            </NavLink>
          </div>

          <div className="search_con">
            <input type="search" name="search" id="search" />
            <span>{icons.search_icon}</span>
          </div>
        </div>
        <div className="action_btn">
          <Link to={"/cart"}>
            {icons.cart_icon2} <span>{cartItems.length}</span>
          </Link>
          <Link to={"/wishlist"}>
            {icons.favourite} <span>{wishlists.length}</span>
          </Link>
          <span className="menu_btn" onClick={() => setShow_menu(!show_menu)}>
            {icons.menu_icon}
          </span>
        </div>
      </div>

      <div className={show_menu ? "back_drop active" : "back_drop"}></div>
    </nav>
  );
};
