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
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={routes.ACCOUNT}>
              Account
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="https://example.com"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
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
          {/* <li className="nav-item active">
            <Link className="nav-link" to={routes.LANDING}>
              Landing
            </Link>
          </li> */}
        </ul>
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