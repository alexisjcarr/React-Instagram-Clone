import React, { Component } from "react";

const withAuthenticate = Komponent =>
  class extends Component {
    render() {
      return (
        <>
          <Komponent />
        </>
      );
    }
  };

export default withAuthenticate;
