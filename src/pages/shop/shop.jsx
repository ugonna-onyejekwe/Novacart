import "./shop.scss";
import { products } from "../../global_components/info";
import { icons } from "../../global_components/info";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <>
      <section className="shop">
        <div className="heading">
          <div className="container">
            <h2>home </h2>
            <h2>/</h2>
            <h2>shop</h2>
          </div>
        </div>
        <div className="product_wrapper container">
                  {products.map(( i, key) => {
              
            return (
              <div className="product_box" key={key}>
                <div className="img_con">
                  <img src={i.img} alt="img" />

                  <div className="action_btns">
                            <Link to={`/${i.name}/${key}` }>
                      <div className=" btn">
                        <button>{icons.view_icon}</button>
                        <span>view</span>
                      </div>
                    </Link>
                    <div className=" btn">
                      <button>{icons.favourite}</button>
                      <span>favourite</span>
                    </div>
                    <div className="btn">
                      <button>{icons.share_icon}</button>
                      <span>share</span>
                    </div>
                  </div>
                </div>
                <div className="txt_con">
                  <p>clothing</p>
                  <h3>{i.name}</h3>
                  <div className="col">
                    <div className="price">
                      <div className="stars">
                        {icons.full_star_icon}
                        {icons.full_star_icon}
                        {icons.full_star_icon}
                        {icons.full_star_icon}
                        {icons.half_star_icon}
                      </div>
                      <h4>
                        {i.cur_price} <span>{i.odd_price}</span>
                      </h4>
                    </div>
                    <div className="cart_btn btn">
                      <button>{icons.cart_icon}</button>
                      <span>add to cart</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="navigations container">
          <span className="active">1</span>
          <span >2</span>
          <span >3</span>
          <span >...</span>
          <span >
                      {icons.right_arrow}
          </span>
        </div>
      </section>
    </>
  );
};
