import * as React from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../SignUp";
import { SignInForm } from "./SignInForm";
import "./SignInForm.css";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <div className="my-login-page">
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h2 className="card-title">Sign In to Author Central</h2>
                <SignInForm history={history} />

                <div className="margin-top20 text-center">
                  <SignUpLink classes="center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const SignIn = withRouter(SignInComponent);
