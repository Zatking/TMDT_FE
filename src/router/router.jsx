import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Product from "../components/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import ProductListAD from "../Admin/Products/ProductList.AD";
import HomeAD from "../Admin/Homel.AD";
import ProductDetailAD from "../Admin/Products/ProDetail.AD";
<<<<<<< HEAD
import ProductPage from "../pages/ProductPage";
=======
import AuthProvider from "./AuthProvider";
import { Outlet } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import ChatWithBot from "../pages/ChatWithBot";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
>>>>>>> 8140b1ec27c778286d4c761b9cb114dd1999ef10

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
        ],
      },
      {
<<<<<<< HEAD
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
        path: "productPage/:cate",
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
    ],
  },
  {
    path: "/",
    element: <HomeAD />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductListAD />,
      },
      {
        path: "ProDetailAD/:id",
        element: <ProductDetailAD />,
=======
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
        ],
>>>>>>> 8140b1ec27c778286d4c761b9cb114dd1999ef10
      },
    ],
  },
]);

export default router;
