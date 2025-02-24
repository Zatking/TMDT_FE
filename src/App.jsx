import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <Header />
      </div>
      <div className="pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
