// @flow
import React, { Component } from "react";

import withRoot from "../hoc/withRoot";
import Layout from "../components/layout";

type Props = {};
type State = {};

class Index extends React.Component<Props, State> {
  render() {
    return (
      <Layout title="title111">
        <h1>Page content</h1>
        <p>Next.js 2 with Material-UI Example</p>
      </Layout>
    );
  }
}

export default withRoot(Index);
