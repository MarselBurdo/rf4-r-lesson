import React, { Component } from "react";
import Button from "../Button";

export default class LifecycleClass extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 23,
    };
    this.classRef = React.createRef();
  }

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
  handleRef = () => {
    this.classRef.current = this.classRef.current + 1;
  };

  // React methods
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
  render() {
    const { counter } = this.state;
    const { current } = this.classRef;

    console.log("method render", { counter, current });

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
          <Button
            size={6}
            bgColor={"#fff"}
            onClickFunction={this.handleDecrement}
          >
            Decrement
          </Button>

          <Button size={6} bgColor={"#fff"} onClickFunction={this.handleRef}>
            Ref
          </Button>
        </div>
      </div>
    );
  }
}
