import { Link, Outlet } from "react-router-dom";
import "./account.scss";
import { icons } from "../../global_components/info";


export const Account = () => {
    return (
      <div className="account_section">
        <div className="heading">
          <div className="container">
            <h2>home</h2>
            <h2>/</h2>
            <h2>my account</h2>
           
          </div>
        </div>
        <div className="container">
          <div className="navigator">
            <Link to={"/account/dashboard"}>
              {icons.dashboard_icon} dashboard
            </Link>
            <Link to={"/account/order"}>{icons.order_icon} order</Link>
            <Link to={"/account/update_pro"}>
              {icons.profile_icon} update profile
            </Link>
            <Link to={"/account/change_pass"}>
              {" "}
              {icons.password_icon} change password
            </Link>
            <Link to={"/account/logout"}>{icons.logout_icon} logout</Link>
          </div>

          <div className="wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    );
}