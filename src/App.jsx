import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";

const App = () => {
  return (
    <HelmetProvider>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <Header />
        </div>
        <div className="pt-[80px]">
          <Outlet />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
