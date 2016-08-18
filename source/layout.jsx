"use strict";

import React from "react";

const Layout = React.createClass ({
  render() {
    return (
      <div>
        { React.cloneElement(
          this.props.children,
          this.state
        ) }
      </div>
    );
  }
});
