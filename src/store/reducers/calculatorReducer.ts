import { ADD } from "../types";
import { DIFF } from "../types";
import { MULT } from "../types";
import { DIV } from "../types";

const calculatorReducer = (state: number, action: any) => {
  let calculator;
  action.payload.d1 = parseInt(action.payload.d1);
  action.payload.d2 = parseInt(action.payload.d2);

  switch (action.type) {
    case ADD:
      calculator = action.payload.d1 + action.payload.d2;
      break;

    case DIFF:
      calculator = action.payload.d1 - action.payload.d2;
      break;

    case MULT:
      calculator = action.payload.d1 * action.payload.d2;
      break;

    case DIV:
      if (action.payload.d2 === 0) {
        calculator = "Error";
      } else {
        calculator = (action.payload.d1 / action.payload.d2).toFixed(2);
      }
      break;

    default:
      calculator = 0;
  }
  return calculator;
};

export default calculatorReducer;
