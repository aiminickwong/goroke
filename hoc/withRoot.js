import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

type Props = {};

const theme = createMuiTheme({});

function withRoot(BaseComponent) {
  class WithRoot extends React.Component {
    static getInitialProps(ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }

      return {};
    }

    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <BaseComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
