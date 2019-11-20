import React from "react";
import { connect } from "react-redux";

function Dashboard(props) {
  const {
    value1,
    value2,
    dashboard,
    incrementV1Action,
    incrementV2Action,
    decreaseV1Action,
    decreaseV2Action
  } = props;

  const onIncrementV1 = () => {
    incrementV1Action(dashboard);
  };

  const onIncrementV2 = () => {
    incrementV2Action(dashboard);
  };

  const onDecrementV1 = () => {
    decreaseV1Action(dashboard);
  };

  const onDecrementV2 = () => {
    decreaseV2Action(dashboard);
  };

  return (
    <div>
      <h2>Active Dashboard : {dashboard} </h2>
      <br />
      <h4> Value1: {value1}</h4> <br />
      <button onClick={onIncrementV1}>increment</button>
      <button onClick={onDecrementV1}>decrement</button>
      <br />
      <h4> Value2: {value2}</h4> <br />
      <button onClick={onIncrementV2}>increment</button>
      <button onClick={onDecrementV2}>decrement</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { dashboard } = ownProps;
  return {
    value1:
      state && state[dashboard] && state[dashboard].value1
        ? state[dashboard].value1.count
        : 0,
    value2:
      state && state[dashboard] && state[dashboard].value2
        ? state[dashboard].value2.count
        : 0
  };
};

const dispatchAction = {};

export default connect(mapStateToProps, dispatchAction)(Dashboard);
