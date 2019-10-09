import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../../../actions/counter/creators";

class Counter extends Component {
  render() {
    const { increment, decrement, value } = this.props;
    return (
      <div className="container">
        <div className="counter">
          <button className="button" onClick={() => decrement()}>
            Less
          </button>
          <span className="tag is-large">{value}</span>
          <button className="button" onClick={() => increment()}>
            More
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counter.value
});

const mapDispatchToProps = {
  increment,
  decrement
};

const CounterConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterConnected;
