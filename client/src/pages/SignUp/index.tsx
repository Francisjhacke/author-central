import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import { SignUpForm } from "./SignUpForm";

const SignUpComponent = ({ history }: { [key: string]: any }) => (
  <div className="my-login-page">
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h2 className="card-title">Sign Up for Author Central</h2>
                <SignUpForm history={history}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const SignUpLink = (props) => (
  <p className={`${props.classes}`}>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);