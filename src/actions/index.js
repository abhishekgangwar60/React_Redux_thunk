import {
  INCREMENT_VALUE_1,
  DECREASE_VALUE_1,
  DECREASE_VALUE_2,
  INCREMENT_VALUE_2
} from "./constants";

export function incrementV1Action(dashboard) {
  return {
    type: INCREMENT_VALUE_1,
    payload: { dashboard }
  };
}
export function decreaseV1Action(dashboard) {
  return {
    type: DECREASE_VALUE_1,
    payload: { dashboard }
  };
}

export function incrementV2Action(dashboard) {
  return {
    type: INCREMENT_VALUE_2,
    payload: { dashboard }
  };
}

export function decreaseV2Action(dashboard) {
  return {
    type: DECREASE_VALUE_2,
    payload: { dashboard }
  };
}
