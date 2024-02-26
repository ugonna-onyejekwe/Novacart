import "./login.scss";
import login_img from "../../assets/login-img.jpg";
import { Link } from "react-router-dom";
import { icons } from "../../global_components/data/info";
import { useState } from "react";

export const Login = () => {
  const [form, setform] = useState(false);
  window.scroll(0, 0);
  return (
    <div className="login_con">
      <div className={form ? "part1 login" : "part1 sign_up"}>
        <div className="nav_con">
          <div className="container">
            <Link to={"/"}>
              <h1>
                <span>nova</span>cart
              </h1>
            </Link>
          </div>
        </div>

        <div className="container">
          <form action="#" className="sign_up_form">
            <h3>create account</h3>

            <div className="socail">
              <span>{icons.facebook_icon}</span>
              <span>{icons.twitter_icon}</span>
              <span>{icons.google_icon}</span>
            </div>
            <h2>or</h2>

            <div className="input_con">
              <input type="text" placeholder="first  name" required />
              <input type="text" placeholder="last  name" required />
              <input type="email" placeholder=" your email" required />
              <input type="password" placeholder=" new password" required />
            </div>

            <button>sign up</button>

            <p>
              Alread have an account?{" "}
              <span onClick={() => setform(!form)}>login</span>
            </p>
          </form>

          <form action="#" className="login_form">
            <h3>login</h3>

            <div className="socail">
              <span>{icons.facebook_icon}</span>
              <span>{icons.twitter_icon}</span>
              <span>{icons.google_icon}</span>
            </div>
            <h2>or</h2>

            <div className="input_con">
              <input type="email" placeholder=" your email" required />
              <input type="password" placeholder="your password" required />
            </div>

            <button>login</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setform(!form)}>sign up</span>
            </p>
          </form>
        </div>
      </div>
      <div className="part2">
        <img src={login_img} alt="" />
      </div>
    </div>
  );
};
