import * as React from "react";
import { MainNavigation, SubNavigation } from "../Navigation";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export class MainLayout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <MainNavigation />
        <SubNavigation />
        <main role="main" className="container ac-content-container">
          {this.props.children}
        </main>
      </div>
    );
  }
}
