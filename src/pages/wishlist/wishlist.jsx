import { Link } from "react-router-dom";
import { useShoppingCart } from "../../global_components/context/context";
import { icons } from "../../global_components/data/info";
import "./wishlist.scss";

export const Wishlist = () => {
  const { wishlists, remove_wishlist_item } = useShoppingCart();
  window.scroll(0, 0);

  return (
    <>
      <section className="wishlist_con">
        <div className="heading">
          <div className="container">
            <h2>home</h2>
            <h2>/</h2>
            <h2>my wishlist</h2>
          </div>
        </div>
        <div>
          {wishlists.length === 0 && (
            <h1 className="empty"> nothing in wishlist </h1>
          )}
          {wishlists.length !== 0 && (
            <div className="wrapper container">
              <div className="top_bar">
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
                  <h3>view</h3>
                </div>
                <div>
                  <h3>remove</h3>
                </div>
              </div>
              {wishlists.map((item) => {
                return (
                  <div className="box">
                    <div className="img_con">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="name">
                      <p>{item.name}</p>
                    </div>
                    <div className="price">
                      <p>{item.cur_price}</p>
                    </div>
                    <div className="view_btn">
                      <Link to={`/${item.name}/${item.id}`}>view</Link>
                    </div>
                    <div className="delete">
                      <span
                        onClick={() => {
                          remove_wishlist_item(item.id);
                        }}
                      >
                        {icons.delete_icon}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
