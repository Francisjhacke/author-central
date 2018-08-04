import * as React from "react";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";
import { PasswordForgetLink } from "../PasswordForget";
import "./SignInForm.css";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

export class SignInForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);

    this.state = { ...SignInForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...SignInForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(SignInForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            className="form-control"
            value={email}
            onChange={event => this.setStateWithEvent(event, "email")}
            type="text"
            required={true}
            autoFocus
            id="inputEmail"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">
            Password
            <PasswordForgetLink classes="float-right" />
          </label>
          <input
            className="form-control"
            value={password}
            onChange={event => this.setStateWithEvent(event, "password")}
            type="password"
            placeholder="Password"
            id="inputPassword"
            required={true}
          />
        </div>
        <div className="form-group no-margin">
          <button
            className="btn btn-primary btn-block"
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </button>
        </div>

        {error && <p className="center">Incorrect Username or Password.</p>}
      </form>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(SignInForm.propKey(columnType, (event.target as any).value));
  }
}
