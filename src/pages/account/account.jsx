import { Link, NavLink, Outlet } from "react-router-dom";
import "./account.scss";
import { icons } from "../../global_components/data/info";

export const Account = () => {
    window.scroll(0, 0);

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
          <NavLink activeclassName="active" to={"/account/dashboard"}>
            {icons.dashboard_icon} <p>dashboard</p>
          </NavLink>
          <NavLink activeclassName="active" to={"/account/order"}>
            {icons.order_icon} <p> order</p>
          </NavLink>
          <NavLink activeclassName="active" to={"/account/update_pro"}>
            {icons.profile_icon} <p> update profile</p>
          </NavLink>
          <NavLink activeclassName="active" to={"/account/change_pass"}>
            {" "}
            {icons.password_icon} <p>change password</p>
          </NavLink>
          <NavLink activeclassName="active" to={"/account/logout"}>
            {icons.logout_icon} <p> logout</p>
          </NavLink>
        </div>

        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
