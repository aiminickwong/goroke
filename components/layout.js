// @flow
import React from "react";
import type { Element } from "react";
import Link from "next/link";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import Drawer from "material-ui/Drawer";
import Head from "./head";
import Nav from "./nav";
import { mailFolderListItems, otherMailFolderListItems } from "./navData";

type Props = {
  children?: Element<any>,
  title?: string,
  className?: string
};

const sideList = (
  <div>
    <List>{mailFolderListItems}</List>
    <Divider />
    <List>{otherMailFolderListItems}</List>
  </div>
);

class Layout extends React.Component<Props, State> {
  state = {
    drawer: true
  };

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    });
  };

  render() {
    const { children, className, title } = this.props;
    return (
      <div className={className}>
        <Head title={title} />

        <Nav />
        <Drawer open={this.state.drawer} onRequestClose={this.toggleDrawer(false)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer(false)}>
            {sideList}
          </div>
        </Drawer>

        {children}
      </div>
    );
  }
}

export default Layout;
