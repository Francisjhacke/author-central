import * as React from "react";
import { PasswordChangeForm } from "./PasswordChangeForm";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";

export interface Props {}

const AccountProfile = (props: Props) => {
  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Email Address:</strong> <AccountEmail /></p>
    </div>
  );
};

const AccountEmail = (props: Props) => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (<span>{(authUser as any).email}</span>)}
    </AuthUserContext.Consumer>
  )
}

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountProfile);
