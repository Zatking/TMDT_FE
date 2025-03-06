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
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
      },
    ],
  },
]);
export default router;
