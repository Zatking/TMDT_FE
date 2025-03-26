import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const EditProAD = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("id",id);

  const [product, setProduct] = useState({
    ProName: "",
    Price: "",
    Description: "",
    RemainQuantity: "",
    Images: ""
  });
  
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchState = async () => {
    try {
      const res = await fetch(apiUrl + `/get-state`);
      if (!res.ok) {
        throw new Error("Fetch state failed");
      }
      const data = await res.json();
      setStateList(data.states);
    } catch (error) {
      console.log("Error fetching state:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(apiUrl + `/get-product`);
      const data = await res.json();
      const foundProduct = data.products.find((item) => item._id === id);
      if (foundProduct) {
        setProduct({
          ProName: foundProduct.ProName,
          Price: foundProduct.Price,
          Description: foundProduct.Description,
          RemainQuantity: foundProduct.RemainQuantity,
          Images: foundProduct.Images,
        });
        console.log(foundProduct);
        setState(foundProduct.State);
      } else {
        setError("Không tìm thấy sản phẩm");
      }
    } catch (error) {
      setError("Không thể tải thông tin sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(`${apiUrl}/update-product/${id}`, {
        ...product,
        State: state, // Đảm bảo key trùng với backend
      });
      if (res.status === 200) {
        alert("Cập nhật sản phẩm thành công!");
        navigate("/AD");
      } else {
        throw new Error("Cập nhật thất bại");
      }
    } catch (error) {
      setError(`Cập nhật thất bại: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen h-screen bg-[#0f172a] p-4 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
              Chỉnh sửa sản phẩm
            </h2>
            {error && <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="ProName" value={product.ProName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="number" name="Price" value={product.Price} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <textarea name="Description" value={product.Description} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="number" name="RemainQuantity" value={product.RemainQuantity} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" name="Images" value={product.Images} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <select name="state" value={state} onChange={handleStateChange} className="w-full px-4 py-2 border rounded-lg">
                {stateList.map((s) => (
                  <option key={s._id} value={s.StateName}>{s.StateName}</option>
                ))}
              </select>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
                {loading ? "Đang cập nhật..." : "Cập nhật"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProAD;
