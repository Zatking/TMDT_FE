import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Navigation from "../components/Navigation";
// import Cart from "./pages/Cart";

export default function ProductPage() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { cate, brand, detail } = useParams();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await productsAPI.getProducts();
  //       setProducts(data.products);
  //     } catch (error) {
  //       setError(error);
  //       console.log("error: ", error);
  //     }
  //   };
  //   fetchProducts();
  //   setLoading(false);
  //   console.log("cate: ", cate);
  // }, []);

  return (
    <div className="pt-5 px-20 grid grid-cols-4">
      <div className="col-span-1">
        <Navigation />
      </div>
      <div className="col-span-3">
        <Product page="product" cate={cate} brand={brand} detail={detail} />
      </div>
    </div>
  );
}
