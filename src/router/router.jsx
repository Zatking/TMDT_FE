import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Product from "../components/Product";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import ProductListAD from "../Admin/Products/ProductList.AD";
import HomeAD from "../Admin/Homel.AD";
import ProductDetailAD from "../Admin/Products/ProDetail.AD";
import AuthProvider from "./AuthProvider";
import { Outlet } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ChatWithBot from "../pages/ChatWithBot";
import OwnPC from "../pages/OwnPC";
import AddPro from "../Admin/Products/AddPro.AD";
import EditPro from "../Admin/Products/EditPro.AD";
import CateList from "../Admin/Products/CateList.AD"
import OderList from "../Admin/Products/OderList.AD";
import StateList from "../Admin/Products/StateList.AD";
import BrandList from "../Admin/Products/BrandList.AD";
import OrderDetail from "../Admin/Products/OrderDetail.AD";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AD",
        element: (
          <ProtectedRouter role="admin">
            <HomeAD />
          </ProtectedRouter>
        ),
        children: [
          {
            index: true,
            element: <ProductListAD />,
          },
          {
            path: "ProDetailAD/:id",
            element: <ProductDetailAD />,
          },
          {
            path: "AddPro",
            element: <AddPro />,
          },
          {
            path: "EditPro/:id",
            element: <EditPro />,
          },
          {
            path: "CateList",
            element: <CateList />,
          },
          {
            path: "OderList",
            element: <OderList />,
          },
          {
            path: "StateList",
            element: <StateList />,
          },
          {
            path:"BrandList",
            element:<BrandList/>
          },
          {
            path:"OrderDetail/:id",
            element:<OrderDetail/>
          }
        ],
      },
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/ChatBot",
            element: <ChatWithBot />,
          },
          {
            path: "news",
            element: <News />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "productDetail/:id",
            element: <ProductDetail />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "productPage/:cate?/:brand?/:detail?",
            element: <ProductPage />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "OwnPC",
            element: <OwnPC />,
          },
        ],
      },
    ],
  },
]);

export default router;
