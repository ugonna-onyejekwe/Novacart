import { createContext, useContext, useState } from "react";
import { products } from "../data/info";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartitems] = useState([]);
  const [wishlists, setWishlists] = useState([]);

  const add_to_cart = (id) => {
    if (cartItems.find((item) => item.id === id)) {
      cartItems.find((item) =>
        item.id === id ? (item.quantity = item.quantity + 1) : null
      );
    } else {
      products.find((item) => {
        if (item.id === id) {
          setCartitems([
            ...cartItems,
            {
              ...item,
              quantity: 1,
            },
          ]);
        }
      });
    }
  };

  const get_cart_subtotal = () => {
    return cartItems.reduce((sub_total, item) => {
      return item.quantity * item.cur_price.replace("$", "") + sub_total;
    }, 0);
  };

  const get_shipping_price = () => {
    return cartItems.reduce((shipping_price, item) => {
      return item.quantity * 5 + shipping_price;
    }, 0);
  };

  const get_cart_total = () => {
    return get_cart_subtotal() + get_shipping_price();
  };

  const remove_from_cart = (id) => {
    let new_cart_items = cartItems.filter((i) => i.id !== id);
    console.group(new_cart_items);
    return setCartitems([...new_cart_items]);
  };

  const get_total_num = () => {
    return cartItems.reduce((num, item) => {
      return item.quantity + num;
    }, 0);
  };

  const add_to_wishlist = (id) => {
    if (wishlists.find((i) => i.id === id)) {
      return null;
    } else {
      products.find((i) =>
        i.id == id ? setWishlists([...wishlists, { ...i }]) : null
      );
    }
  };

  const remove_wishlist_item = (id) => {
    setWishlists(wishlists.filter((i) => i.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        add_to_cart,
        cartItems,
        setCartitems,
        get_cart_subtotal,
        get_shipping_price,
        get_cart_total,
        remove_from_cart,
        get_total_num,
        wishlists,
        setWishlists,
        add_to_wishlist,
        remove_wishlist_item,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
