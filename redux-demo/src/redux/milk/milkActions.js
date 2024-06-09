import { BUY_MILK } from "./milkType";

export default function buyMilk(milk = 1) {
  return {
    type: BUY_MILK,
    payload: milk,
  };
}
