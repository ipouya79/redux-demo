import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

function CakeContainer() {
  const [value, setValue] = useState("");

  // 1. accepts to return as its parameter : selector function
  // 2. useSelector hooks return whatever returns by selector function

  const state = useSelector((state) => state.cake);
  console.log(state);

  // return a refernce to the dispatch function in redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number: {state.numOfCakes}</h2>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy cake</button>
    </div>
  );
}

export default CakeContainer;
