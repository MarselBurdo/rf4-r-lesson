import React, { Component } from "react";
import FetchForm from "./FetchForm";
import FetchView from "./FetchView";

export default class FetchAPI extends Component {
  // request to  https://rickandmortyapi.com/documentation

  state = {
    charaterName: "",
  };

  handleChange = (name) => {
    this.setState({ charaterName: name });
  };

  render() {
    const { charaterName } = this.state;

    return (
      <>
        <FetchForm onSubmit={this.handleChange} />
        <FetchView hero={charaterName} />
      </>
    );
  }
}
