import { BUY_MILK } from "./milkType";

const initalState = {
  numOfMilks: 10,
};

export default function milkReducer(state = initalState, action) {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...state,
        numOfMilks: state.numOfMilks - action.payload,
      };

    default:
      return state;
  }
}
