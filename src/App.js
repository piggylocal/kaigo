import MenuComponent from "./components/menu";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

  return (
    <div className="App">
        <ScrollToTop />
        <Outlet />
        <MenuComponent />
    </div>
  );
}

export default App;
