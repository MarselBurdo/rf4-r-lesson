import React, { Component } from "react";
import AddOrderForm from "./AddOrderForm";
import OrderList from "./OrderList";

export default class Order extends Component {
  state = {
    orders: [],
  };
  addItemToOrders = (item) => {
    this.setState((state) => ({ ...state, orders: [...state.orders, item] }));
  };

  render() {
    const { orders } = this.state;

    return (
      <>
        <AddOrderForm func={this.addItemToOrders} />
        <OrderList items={orders} />
      </>
    );
  }
}
