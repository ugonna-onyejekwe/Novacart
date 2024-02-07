import "./product_detail.scss";
import { icons, products } from "../../global_components/info";
import { Link, Outlet, useParams } from "react-router-dom";


export const Product_details = () => {
  const { name, id } = useParams();

  return (
    <>
      <div className="product_detail_con">
        <div className="heading">
          <div className="container">
            <h2>home</h2>
            <h2>/</h2>
            <h2>shop</h2>
            <h2>/</h2>
            <h2>{name}</h2>
          </div>
        </div>

        <div className="container">
          {products.map((i, key) => {
        
            if (i.name === name && key === Math.floor(id)) {
              return (
                <>
                  <div className="part1">
                    <div className="img_con">
                      <img src={i.img} alt="img" />
                    </div>

                    <div className="txt_con">
                      <h2>{name}</h2>
                      <p className="brand">
                        brand: <span>addidas</span>
                      </p>

                      <h3>
                        {i.cur_price} <span>{i.odd_price}</span>
                      </h3>

                      <p className="txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consectetur autem, eius inventore quo id
                        blanditiis error dicta ipsa quidem saepe possimus nisi
                        quas fuga vel ullam necessitatibus reiciendis eveniet
                        eum.
                      </p>

                      <ul>
                        <li>{icons.check_icon}1 year warranty</li>
                        <li>{icons.check_icon} 30 days return policy</li>
                        <li>{icons.check_icon} cash on delivery avaliable</li>
                      </ul>

                      <div className="color_con">
                        <p>color:</p>
                        <div className="pellet"></div>
                        <div className="pellet"></div>
                        <div className="pellet"></div>
                        <div className="pellet"></div>
                        <div className="pellet"></div>
                      </div>
                      <div className="size_con">
                        <p>size:</p>
                        <span className="active">m</span>
                        <span>l</span>
                        <span>xl</span>
                        <span>xxl</span>
                      </div>

                      <div className="action_btn">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={1}
                        />
                        <button>add to cart</button>
                        <button>{icons.favourite}</button>
                      </div>
                    </div>
                  </div>

                  <div className="part2">
                    <div className="nav">
                      <Link to={`additional_info`}>
                        additional info
                      </Link>
                      <Link to={`reviews`}>reviews(3)</Link>
                    </div>
                    <div className="wrapper">
                      <Outlet />
                    </div>
                  </div>

                  <div className="part3">
                    <h2><span>related</span> products</h2>
                    <div className="product_wrapper">
                      {products.slice(0, 4).map((i, key) => {
                        return (
                          <div className="product_box" key={key}>
                            <div className="img_con">
                              <img src={i.img} alt="img" />

                              <div className="action_btns">
                                <Link to={`/${i.name}/${key}`}>
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
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
