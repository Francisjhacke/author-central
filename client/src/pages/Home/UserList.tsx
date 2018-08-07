import * as React from "react";

interface InterfaceProps {
  users?: any;
}

export class UserList extends React.Component<InterfaceProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { users }: any = this.props;
    const list = [];
    users.forEach(doc => {
      list.push(<li key={doc.id}>{doc.data().username}</li>)
    })
    return (
      <div>
        <h2>List of User names</h2>
        <p>(Saved on Sign Up in Firebase Firestore)</p>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}