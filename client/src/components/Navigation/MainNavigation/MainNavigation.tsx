import * as React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../../constants/routes";
import { AuthUserContext } from "../../../firebase/AuthUserContext";
import { auth } from "../../../firebase";
import Button from "../../Button";

import "./MainNavigation.css";

const MainNavigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <NavLink activeClassName="active" className="navbar-brand ac-navbar-brand mr-auto mr-lg-0" to={routes.LANDING}>
        Author Central
      </NavLink>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul className="navbar-nav mr-auto">
            <a className="nav-link" href="#">Explore</a>
            <a className="nav-link" href="#">Suggestions</a>
        </ul>

        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <Button type={"primary"} callback={() => auth.doSignOut}>
              Sign Out
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <NavLink 
        activeClassName="active" 
        className="navbar-brand ac-navbar-brand mr-auto mr-lg-0" 
        to={routes.LANDING}
      >
        Author Central
      </NavLink>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="navbar-collapse offcanvas-collapse"
        id="mainNavMenu"
      >
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={routes.SIGN_IN}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default MainNavigation;