import React, { Component } from "react";

const initialValue = { name: "", email: "", agreement: false };
export default class AddOrderForm extends Component {
  state = {
    ...initialValue,
  };
  handlerOnSubmit = (e) => {
    e.preventDefault();
    this.props.func(this.state);
    this.reset();
  };

  handelrOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    //long way
    // this.setState((state) => ({
    //   ...state,
    //   [name]: type !== "checkbox" ? value : checked,
    // }));

    //short way
    this.setState({
      [name]: type !== "checkbox" ? value : checked,
    });
  };

  reset = () => {
    this.setState({ ...initialValue });
  };

  render() {
    const { name, email, agreement } = this.state;

    return (
      <form onSubmit={this.handlerOnSubmit}>
        <label>
          Name
          <input
            type={"text"}
            name="name"
            value={name}
            onChange={this.handelrOnChange}
          />
        </label>
        <label>
          Email
          <input
            type={"text"}
            name="email"
            value={email}
            onChange={this.handelrOnChange}
          />
        </label>
        <label>
          Agreement
          <input
            type={"checkbox"}
            name="agreement"
            checked={agreement}
            onChange={this.handelrOnChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
