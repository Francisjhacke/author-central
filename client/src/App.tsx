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
import { Dashboard } from "./pages/Dashboard";

// Components
import { MainLayout, EmptyLayout } from "./components/Layout";

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
        <Switch>
          <AppRoute exact={true} path={routes.SIGN_UP} component={SignUp} layout={EmptyLayout} />
          <AppRoute exact={true} path={routes.SIGN_IN} component={SignIn} layout={EmptyLayout} />
          <AppRoute exact={true} path={routes.LANDING} component={Landing} layout={MainLayout} />
          <AppRoute exact={true} path={routes.PASSWORD_FORGET} component={PasswordForget} layout={MainLayout} />
          <AppRoute exact={true} path={routes.HOME} component={Home} layout={MainLayout} />
          <AppRoute exact={true} path={routes.ACCOUNT} component={Account} layout={MainLayout} />
          <AppRoute exact={true} path={routes.DASHBOARD} component={Dashboard} layout={MainLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export const App = withAuthentication(AppComponent);
