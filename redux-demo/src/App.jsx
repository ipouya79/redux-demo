import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainter from "./components/MilkContainter";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
    <CakeContainer/>
    <MilkContainter/>
    <hr />
    <UserList/>
    </Provider>
  );
}

export default App;
