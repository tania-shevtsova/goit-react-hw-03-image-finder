import React, { Component } from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <RingLoader
          css={override}
          size={50}
          color={"red"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
