import MenuComponent from "./components/menu";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Outlet />
        <MenuComponent />
    </div>
  );
}

export default App;
