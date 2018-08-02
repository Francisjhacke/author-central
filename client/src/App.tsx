import * as React from "react";

// Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "./constants/routes";

// Firebase
import { firebase } from "./firebase";
import { withAuthentication } from "./firebase/withAuthentication";

// Pages
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { PasswordForget } from "./pages/PasswordForget";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

// Components
import MainNavigation from "./components/Navigation/MainNavigation";
import SubNavigation from "./components/Navigation/SubNavigation";

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavigation />
          <SubNavigation />
          <main role="main" className="container">
            <Switch>
              <Route exact={true} path={routes.LANDING} component={Landing} />
              <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
              <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
              <Route
                exact={true}
                path={routes.PASSWORD_FORGET}
                component={PasswordForget}
              />
              <Route exact={true} path={routes.HOME} component={Home} />
              <Route exact={true} path={routes.ACCOUNT} component={Account} />
            </Switch>
          </main>
          
        </div>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
