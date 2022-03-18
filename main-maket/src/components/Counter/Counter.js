import React, { Component } from "react";
import Button, { EmoButton } from "../Button";
import "./style.css";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 23,
      isView: false,
      tmpArray: [1, 2, "4", 5],
    };
  }

  //   state = {
  //     counter: 23,
  //   };

  handleIncriment = (e) => {
    return this.setState({
      counter: this.state.counter + 1,
      isView: !!this.state.counter,
      tmpArray: [this.state.tmpArray, this.state.counter],
    });
  };

  handleDecrement = (e) => {
    return this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;
    console.log(this.state);
    return (
      <div className="counter_block">
        <div className="counter_block-text">{counter}</div>
        <div>
          <Button
            size={6}
            bgColor={"#fff"}
            onClickFunction={this.handleIncriment}
          >
            Increment
          </Button>
          <EmoButton size={5} bgColor={"#fff"} onClick={this.handleDecrement}>
            Decrement
          </EmoButton>
        </div>
      </div>
    );
  }
}
