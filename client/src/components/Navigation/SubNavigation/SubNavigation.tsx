import * as React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../../constants/routes";
import { AuthUserContext } from "../../../firebase/AuthUserContext";
import "./SubNavigation.css";

export const SubNavigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : null)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div className="bg-white shadow-sm">
    <nav className="nav nav-underline ac-sub-nav">
      <NavLink
        activeClassName="active"
        className="nav-link"
        to={routes.DASHBOARD}
      >
        Dashboard
      </NavLink>
      <div className="nav-item dropdown">
        <a
          id="profileDropdown"
          className="nav-link dropdown-toggle"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Account
        </a>
        <div className="dropdown-menu" aria-labelledby="profileDropdown">
          <NavLink className="dropdown-item" to={routes.ACCOUNT}>
            Profile
          </NavLink>
          <a className="dropdown-item" href="#">
            Settings?
          </a>
          <a className="dropdown-item" href="#">
            Help?
          </a>
        </div>
      </div>

      {/* <a className="nav-link" href="#"> // Keeping for badge/pill styling *may be used*
        Friends
        <span className="badge badge-pill bg-light align-text-bottom">27</span>
        </a> */}
    </nav>
  </div>
);
export default SubNavigation;
