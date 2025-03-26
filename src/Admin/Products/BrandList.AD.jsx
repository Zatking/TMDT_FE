import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const BrandList = () => {
  const [brandList, setBrandList] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBrand, setNewBrand] = useState({ BrandName: "" });
  const [isAdding, setIsAdding] = useState(false);

  const fetchBrandList = async () => {
    try {
      const res = await fetch(apiUrl + "/get-brand");

      if (!res.ok) {
        throw new Error("Lỗi khi tải dữ liệu thương hiệu");
      }

      const data = await res.json();
      console.log("Dữ liệu API nhận được:", data);

      if (!data.brands || !Array.isArray(data.brands)) {
        throw new Error("Dữ liệu không hợp lệ!");
      }

      setBrandList(data.brands);
    } catch (error) {
      setError(error.message || "Không thể tải dữ liệu thương hiệu");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa thương hiệu này?")) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`${apiUrl}/deleteBrandByID/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error("Không thể xóa thương hiệu");
      }

      setBrandList(prevList => prevList.filter(item => item._id !== id));
    } catch (error) {
      alert(error.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleAddBrand = async (e) => {
    e.preventDefault();
    if (!newBrand.BrandName.trim()) {
      alert("Vui lòng nhập tên thương hiệu!");
      return;
    }

    setIsAdding(true);
    try {
      const res = await fetch(`${apiUrl}/add-brand`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBrand),
      });

      if (!res.ok) {
        throw new Error("Không thể thêm thương hiệu");
      }

      const data = await res.json();
      setBrandList(prevList => [...prevList, data.brand]);
      setIsModalOpen(false);
      setNewBrand({ BrandName: "" });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    fetchBrandList();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Danh sách thương hiệu
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Thêm thương hiệu</span>
            </button>
            <span className="px-6 py-3 bg-blue-500 rounded-full text-lg font-semibold shadow-lg">
              {brandList.length} thương hiệu
            </span>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-6 text-xl text-gray-300">Đang tải dữ liệu...</span>
          </div>
        )}

        {error && (
          <div className="p-6 bg-red-500/10 border border-red-500 rounded-xl shadow-lg">
            <p className="text-red-400 flex items-center text-lg">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {!loading && !error && brandList.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <svg className="w-24 h-24 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-2xl text-gray-400">Không có thương hiệu nào.</p>
          </div>
        )}

        {!loading && !error && brandList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {brandList.map((item) => (
              <div 
                key={item._id} 
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.BrandName}
                      </h3>
                      <p className="text-sm text-gray-400">ID: {item._id}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(item._id)}
                    disabled={deletingId === item._id}
                    className="p-2 rounded-full hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors duration-300 group-hover:opacity-100 opacity-0"
                    title="Xóa thương hiệu"
                  >
                    {deletingId === item._id ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-400"></div>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Thêm Thương Hiệu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Thêm thương hiệu mới</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleAddBrand}>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Tên thương hiệu</label>
                <input
                  type="text"
                  value={newBrand.BrandName}
                  onChange={(e) => setNewBrand({ BrandName: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Nhập tên thương hiệu"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isAdding}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  {isAdding ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      <span>Đang thêm...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Thêm</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandList;
