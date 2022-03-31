import React, { Component } from "react";

export default class FetchForm extends Component {
  state = {
    searchName: "",
  };

  handleSeacrchChange = (e) => {
    this.setState({ searchName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchName);
    this.reset();
  };

  reset = () => {
    this.setState({ searchName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type={"text"}
          onChange={this.handleSeacrchChange}
          value={this.state.searchName}
        />
        <button>Search</button>
      </form>
    );
  }
}
