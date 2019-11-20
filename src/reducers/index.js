import { combineReducers } from "redux";

const initialState = {
  count: 0
};

export function value1Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_VALUE1":
      return { ...state, count: state.count + 1 };
    case "DECREASE_VALUE1":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export function value2Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_VALUE2":
      return { ...state, count: state.count + 1 };
    case "DECREASE_VALUE2":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const reducers = combineReducers({
  value1: value1Reducer,
  value2: value2Reducer
});

function channelReducer(state = {}, action) {
  if (action.payload && action.payload.dashboard) {
    return {
      ...state,
      [action.payload.dashboard]: reducers(
        state[action.payload.dashboard],
        action
      )
    };
  }
  return state;
}
export default channelReducer;
