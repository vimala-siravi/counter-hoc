import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </h4>
      </div>
    );
  }
}
export default withCounter(HoverCounter, 2);
