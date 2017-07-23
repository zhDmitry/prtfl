import React, {Component} from "react";
import Xray from "react-x-ray";

const Div = props => <div {...props} />;

class Layout extends Component {
  render() {
    const {xray, header} = this.props;
    const Wrapper = xray ? Xray : Div;
    return (
      <Wrapper>
        {header}
        <main>
          {this.props.children}
        </main>
      </Wrapper>
    );
  }
}

export default Layout;
