import React, { Component, Fragment } from "react";

export default class OrderList extends Component {
  render() {
    const { items } = this.props;

    return (
      <>
        <ul>
          {items?.map((elem, i) => (
            <Fragment key={i}>
              <li>{elem.name}</li>
            </Fragment>
          ))}
        </ul>
      </>
    );
  }
}
