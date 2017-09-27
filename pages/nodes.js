// @flow
import React, { Component } from "react";

import withRoot from "../hoc/withRoot";
import Layout from "../components/layout";

type Props = {};
type State = {};

class Nodes extends React.Component<Props, State> {
  render() {
    return (
      <Layout title="title111">
        <h1>Node List</h1>
        <p>Docker Machine List</p>
      </Layout>
    );
  }
}

export default withRoot(Nodes);
