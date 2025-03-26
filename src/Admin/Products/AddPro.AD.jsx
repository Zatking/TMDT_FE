import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBox, faPlus, faImage, faTag, faBoxOpen, faChartLine, faListUl } from "@fortawesome/free-solid-svg-icons";
import ProductAD from "../../api/products.admin";

const AddPro = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    ProName: "",
    Price: 0,
    Images: "",
    Description: "",
    Category: "",
    SoldQuantity: 0,
    RemainQuantity: 0,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const imageUrl = e.target.value;
    setProducts({ ...products, Images: imageUrl });
    setPreviewImage(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ProductAD.createProduct(products);
      navigate("/AD");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-8">
              <Link to="/AD">
                <button className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/10">
                  <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
                </button>
              </Link>
              <div className="flex items-center space-x-6">
                <div className="p-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                  <FontAwesomeIcon icon={faBox} className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">Thêm sản phẩm mới</h1>
                  <p className="text-blue-100 mt-2 text-lg">Điền thông tin chi tiết sản phẩm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Image URL Input */}
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full">
                  <label className="block text-lg font-medium text-white mb-3">
                    Link hình ảnh
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faImage} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                    </div>
                    <input
                      type="url"
                      value={products.Images}
                      onChange={handleImageChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                {previewImage && (
                  <div className="w-72 h-72 border-2 border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Tên sản phẩm
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faTag} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <input
                        type="text"
                        value={products.ProName}
                        onChange={(e) => setProducts({ ...products, ProName: e.target.value })}
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Giá
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <input
                        type="number"
                        value={products.Price}
                        onChange={(e) => setProducts({ ...products, Price: e.target.value })}
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Số lượng còn lại
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faBoxOpen} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <input
                        type="number"
                        value={products.RemainQuantity}
                        onChange={(e) => setProducts({ ...products, RemainQuantity: e.target.value })}
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Số lượng đã bán
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <input
                        type="number"
                        value={products.SoldQuantity}
                        onChange={(e) => setProducts({ ...products, SoldQuantity: e.target.value })}
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Mô tả
                    </label>
                    <div className="relative group">
                      <div className="absolute top-4 left-5">
                        <FontAwesomeIcon icon={faListUl} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <textarea
                        value={products.Description}
                        onChange={(e) => setProducts({ ...products, Description: e.target.value })}
                        rows="4"
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-white mb-3">
                      Danh mục
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faBox} className="h-6 w-6 text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                      </div>
                      <input
                        type="text"
                        value={products.Category}
                        onChange={(e) => setProducts({ ...products, Category: e.target.value })}
                        className="w-full pl-14 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <div className="relative flex items-center">
                    <FontAwesomeIcon icon={faPlus} className="h-6 w-6 mr-3" />
                    {loading ? "Đang thêm..." : "Thêm sản phẩm"}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPro;
