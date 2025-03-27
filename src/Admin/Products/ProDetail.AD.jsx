import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBox, faEdit, faTrash, faTag, faBoxOpen, faChartLine, faListUl } from "@fortawesome/free-solid-svg-icons";
import ProductAD from "../../api/products.admin";

const DetailProAD = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const result = await ProductAD.getProducts();
        const product = result.products.find((item) => item._id === id);
        if (product) {
          setData(product);
        } else {
          setError("Không tìm thấy sản phẩm");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Có lỗi xảy ra khi tải dữ liệu sản phẩm");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
       try {
      const response = await fetch(
        `https://node-tmdt.vercel.app/api/deleteProduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Có thể bỏ nếu API không cần
            // Authorization: `Bearer ${yourToken}`, // Thêm nếu API yêu cầu xác thực
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Lỗi ${response.status}: Không thể xóa sản phẩm`);
      }
  
      const data = await response.json();
      console.log("Xóa sản phẩm thành công:", data);
      window.location.href = "/AD";
      return data;
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      return { error: error.message };
    }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
              <div className="animate-pulse space-y-8">
                <div className="h-8 bg-white/10 rounded-xl w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="h-4 bg-white/10 rounded-lg w-1/4"></div>
                    <div className="h-12 bg-white/10 rounded-xl"></div>
                    <div className="h-4 bg-white/10 rounded-lg w-1/4"></div>
                    <div className="h-12 bg-white/10 rounded-xl"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 bg-white/10 rounded-lg w-1/4"></div>
                    <div className="h-32 bg-white/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{error || "Không tìm thấy sản phẩm"}</h2>
              <Link to="/AD">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300">
                  Quay lại
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-4 overflow-hidden">
      <div className="h-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/AD">
                  <button className="p-2 bg-white hover:bg-gray-50 text-gray-700 rounded-xl transition-all duration-300 shadow-md">
                    <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                  </button>
                </Link>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                    <FontAwesomeIcon icon={faBox} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">Chi tiết sản phẩm</h1>
                    <p className="text-gray-600 text-sm">Xem thông tin chi tiết sản phẩm</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to={`/AD/EditPro/${id}`}>
                  <button className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-all duration-300 shadow-md">
                    <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
                  </button>
                </Link>
                <button
                  onClick={handleDelete}
                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative h-[calc(100vh-8rem)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Section */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md aspect-square border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg">
                  <img
                    src={data.Images}
                    alt={data.ProName}
                    className="w-full h-full object-contain p-3"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://redem.io/wp-content/uploads/2020/06/Redem-Error.jpeg";
                    }}
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faTag} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Tên sản phẩm</label>
                  </div>
                  <div className="text-sm text-gray-600 break-words">
                    {data.ProName}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faBox} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Mã sản phẩm</label>
                  </div>
                  <div className="text-sm text-gray-600 break-words">
                    GD_{data._id}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.State?.StateName || "N/A"}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Giá</label>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.Price?.toLocaleString()} VNĐ
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faBoxOpen} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Số lượng</label>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.RemainQuantity || "N/A"}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faBox} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Danh mục</label>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.Category?.CateName || "N/A"}
                  </div>
                </div>

                <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <FontAwesomeIcon icon={faListUl} className="h-4 w-4 text-indigo-500" />
                    </div>
                    <label className="text-sm font-medium text-gray-700">Mô tả</label>
                  </div>
                  <div className="text-sm text-gray-600 break-words whitespace-pre-wrap">
                    {data.Description || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProAD;