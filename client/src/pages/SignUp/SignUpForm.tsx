import * as React from "react";
import * as routes from "../../constants/routes";
import { auth, db } from "../../firebase";

interface Props {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface State {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export class SignUpForm extends React.Component<Props, State> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: Props) {
    super(props);
    this.state = { ...SignUpForm.INITIAL_STATE };
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        const userDetails = authUser;
        auth.doSignInWithEmailAndPassword(email, passwordOne).then((res) => { // Sign in the new user before writing to the database (Firebase authentication solution)
          // Create a user in our own accessible Firebase Firestore too
          db.fsCreateUser(userDetails.user.uid, username, email)
            .then(() => {
              this.setState(() => ({ ...SignUpForm.INITIAL_STATE }));
              history.push(routes.HOME);
            })
            .catch(error => {
              console.log(error);
              this.setState(SignUpForm.propKey("error", error));
            });
        });
      })
      .catch(error => {
        this.setState(SignUpForm.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <div className="form-group">
          <label htmlFor="inputUsername">Full Name</label>
          <input
            className="form-control"
            value={username}
            onChange={event => this.setStateWithEvent(event, "username")}
            type="text"
            required={true}
            autoFocus
            id="inputUsername"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email Address</label>
          <input
            className="form-control"
            value={email}
            onChange={event => this.setStateWithEvent(event, "email")}
            type="text"
            placeholder="Email Address"
            id="inputEmail"
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordOne">Password</label>
          <input
            className="form-control"
            value={passwordOne}
            onChange={event => this.setStateWithEvent(event, "passwordOne")}
            type="password"
            placeholder="Password"
            id="inputPasswordOne"
            required={true}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword">Confirm Password</label>
          <input
            className="form-control"
            value={passwordTwo}
            onChange={event => this.setStateWithEvent(event, "passwordTwo")}
            type="password"
            placeholder="Confirm Password"
            id="inputPasswordTwo"
            required={true}
          />
        </div>

        <div className="form-group no-margin">
          <button
            className="btn btn-primary btn-block"
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
          </button>
        </div>

        {error && <p className="center">{error.message}</p>}
      </form>
    );
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(SignUpForm.propKey(columnType, (event.target as any).value));
  }
}
