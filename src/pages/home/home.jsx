import "./home.scss";
import home_img from "../../assets/home-img.png";
import {
  icons,
  popular_categories,
  products,
} from "../../global_components/info";
import { Link } from "react-router-dom";
import banner1 from "../../assets/home_bg1.jpg";
import banner2 from "../../assets/home_bg5.jpg";
import banner3 from "../../assets/home_bg2.jpg";
import banner4 from "../../assets/home_bg4.jpg";
import banner5 from "../../assets/home_bg3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const Home = () => {
  return (
    <div className="home_wrapper">
      <section className="home" id="home">
        <div className="container">
          <div className="txt_con">
            <h4>hot promotions</h4>
            <h2>super value deals</h2>
            <h1>on all products</h1>
            <p>Save more with coupons & up to 70% off</p>
            <button>shop now</button>
          </div>

          <div className="img_con">
            <img src={home_img} alt="img" />
          </div>
        </div>
      </section>

      <section className="popular_section">
        <div className="container">
          <div className="nav">
            <h2>
              <span>popular</span> categories
            </h2>

            <div className="action_btn">
              <span className="swiper-prev-arrow">{icons.left_arrow}</span>
              <span className="swiper-next-arrow">{icons.right_arrow}</span>
            </div>
          </div>
          <div className="wrapper">
            <Swiper
              spaceBetween={20}
              modules={[Navigation, Autoplay]}
              slidesPerView={6}
              navigation={{
                nextEl: "swiper-next-arrow",
                prevEl: "swiper-prev-arrow",
                clickable: true,
              }}
            >
              {popular_categories.map((i, key) => {
                return (
                  <SwiperSlide key={key} className="box">
                    <div className="img_con">
                      <img src={i.img} alt="img" />
                    </div>
                    <h4>{i.name}</h4>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="product_section">
        <div className="container">
          <div className="nav">
            <h2>
              <span>featured</span> products
            </h2>
            <p>Collection of new morden designs</p>
          </div>

          <div className="product_wrapper">
            {products.slice(0, 8).map((i, key) => {
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
          <div className="btn_con">
            <Link to="/">
              <button>more product</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="deal_section">
        <div className="container">
          <div className="box first_box">
            <h2>Deal Of The Day</h2>
            <p>limited quantities</p>

            <h3>summer collection new morden design.</h3>
            <h4>
              $339.00 <span>$500.00</span>
            </h4>

            <div className="time_limit">
              <p>hurry up, offer end in:</p>

              <div className="time">
                <span>02</span> : <span>22</span> : <span>57</span> :{" "}
                <span>24</span>
              </div>
            </div>

            <button>shop now</button>
          </div>

          <div className="box second_box">
            <h2>Women Clothing</h2>
            <p>gown & bag</p>

            <h3>Try something new on vacation.</h3>
            <h4>
              $339.00 <span>$500.00</span>
            </h4>

            <div className="time_limit">
              <p>hurry up, offer end in:</p>

              <div className="time">
                <span>02</span> : <span>22</span> : <span>57</span> :{" "}
                <span>24</span>
              </div>
            </div>

            <button>shop now</button>
          </div>
        </div>
      </section>

      <section className="new_arrival">
        <div className="container">
          <div className="nav">
            <h2>
              <span>new</span> arrivals
            </h2>

            <div className="action_btn">
              <span className="swiper-prev-arrow">{icons.left_arrow}</span>
              <span className="swiper-next-arrow">{icons.right_arrow}</span>
            </div>
          </div>
          <div className="wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: "swiper-next-arrow",
                prevEl: "swiper-prev-arrow",
                clickable: true,
              }}
              className="product_wrapper"
            >
              {products.slice(5, 14).map((i, key) => {
                return (
                  <SwiperSlide className="product_box" key={key}>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="event_section">
        <div className="container">
          <div className="part1">
            <div className="box">
              <div className="img_con">
                <img src={banner1} alt="img" />
              </div>
              <div className="txt_con">
                <h5>crazy deal</h5>
                <h3>buy 1 get 1 free</h3>
                <p>the best classic dress is on sale now</p>
                <button>learn more</button>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={banner2} alt="img" />
              </div>
              <div className="txt_con">
                <h5>spring/summer</h5>
                <h3>upcoming season</h3>
                <p>the best classic dress is on sale now</p>
                <button>learn more</button>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="box">
              <div className="img_con">
                <img src={banner3} alt="img" />
              </div>
              <div className="txt_con">
                <h3>seasonal sale</h3>
                <p>winter clothing</p>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={banner4} alt="img" />
              </div>
              <div className="txt_con">
                <h3>new footwear collection</h3>
                <p>spring / summer</p>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={banner5} alt="img" />
              </div>
              <div className="txt_con">
                <h3>t-shirt</h3>
                <p>new collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
