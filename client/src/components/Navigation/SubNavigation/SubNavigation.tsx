import * as React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/routes";
import { AuthUserContext } from "../../../firebase/AuthUserContext";
import { auth } from "../../../firebase";
import Button from "../../Button";

const SubNavigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
    <div className="nav-scroller bg-white shadow-sm">
        <nav className="nav nav-underline">
            <a className="nav-link active" href="#">Dashboard</a>
            <a className="nav-link" href="#">
                Friends
                <span className="badge badge-pill bg-light align-text-bottom">27</span>
            </a>
            <a className="nav-link" href="#">Explore</a>
            <a className="nav-link" href="#">Suggestions</a>
        </nav>
    </div>
);

const NavigationNonAuth = () => (
    <div className="nav-scroller bg-white shadow-sm">
        <nav className="nav nav-underline">
            <a className="nav-link active" href="#">Dashboard</a>
            <a className="nav-link" href="#">
                Friends
                <span className="badge badge-pill bg-light align-text-bottom">27</span>
            </a>
            <a className="nav-link" href="#">Explore</a>
            <a className="nav-link" href="#">Suggestions</a>
        </nav>
    </div>
);

export default SubNavigation;
