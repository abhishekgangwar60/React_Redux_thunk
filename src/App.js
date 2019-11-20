import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  incrementV1Action,
  incrementV2Action,
  decreaseV1Action,
  decreaseV2Action
} from "./actions";
import Dashboard from "./components/dashboard";

function Page(props) {
  const [dashboard, setDashboard] = React.useState("d1");
  const {
    incrementV1Action,
    incrementV2Action,
    decreaseV1Action,
    decreaseV2Action
  } = props;

  return (
    <div>
      <button onClick={() => setDashboard("d1")}>Dashboard 1</button>
      <button onClick={() => setDashboard("d2")}>Dashboard 2</button>
      <Dashboard
        dashboard={dashboard}
        incrementV1Action={incrementV1Action}
        incrementV2Action={incrementV2Action}
        decreaseV1Action={decreaseV1Action}
        decreaseV2Action={decreaseV2Action}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  incrementV1Action: dashboard => dispatch(incrementV1Action(dashboard)),
  decreaseV1Action: dashboard => dispatch(decreaseV1Action(dashboard)),
  incrementV2Action: dashboard => dispatch(incrementV2Action(dashboard)),
  decreaseV2Action: dashboard => dispatch(decreaseV2Action(dashboard))
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
