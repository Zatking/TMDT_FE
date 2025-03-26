import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const apiUrl = import.meta.env.VITE_API_URL;

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const fetchOrderList = async () => {
    try {
      const res = await fetch(apiUrl + "/getAllOrders");

      if (!res.ok) {
        throw new Error("Lỗi khi tải dữ liệu đơn hàng");
      }

      const data = await res.json();
      console.log("Dữ liệu API nhận được:", data);

      if (!data.orders || !Array.isArray(data.orders)) {
        throw new Error("Dữ liệu không hợp lệ!");
      }

      setOrderList(data.orders);
    } catch (error) {
      setError(error.message || "Không thể tải dữ liệu đơn hàng");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, []);

  const filteredOrders = selectedStatus === "all" 
    ? orderList 
    : orderList.filter(order => order.status === selectedStatus);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Danh sách đơn hàng
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg transition-colors duration-300 appearance-none pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="pending">Chờ xử lý</option>
                <option value="processing">Đang xử lý</option>
                <option value="completed">Hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <span className="px-6 py-3 bg-blue-500 rounded-full text-lg font-semibold shadow-lg">
              {filteredOrders.length} đơn hàng
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

        {!loading && !error && filteredOrders.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <svg className="w-24 h-24 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-2xl text-gray-400">Không có đơn hàng nào.</p>
          </div>
        )}

        {!loading && !error && filteredOrders.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {filteredOrders.map((order) => (
              <div 
                key={order._id} 
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={faShoppingCart} className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Đơn hàng #{order._id.slice(-6)}
                      </h3>
                      <p className="text-sm text-gray-400">Khách hàng: {order.customer.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      order.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      order.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {order.status === 'completed' ? 'Hoàn thành' :
                       order.status === 'pending' ? 'Chờ xử lý' :
                       order.status === 'processing' ? 'Đang xử lý' :
                       'Đã hủy'}
                    </span>
                    <Link
                      to={`/AD/OrderDetail/${order._id}`}
                      className="p-2 rounded-full hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:opacity-100 opacity-0"
                      title="Xem chi tiết"
                    >
                      <FontAwesomeIcon icon={faCircleInfo} className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="font-medium">Số điện thoại:</p>
                    <p>{order.customer.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium">Địa chỉ:</p>
                    <p>{order.customer.address}</p>
                  </div>
                  <div>
                    <p className="font-medium">Tổng tiền:</p>
                    <p className="text-lg font-semibold text-white">{order.TotalPrice.toLocaleString()} VND</p>
                  </div>
                  <div>
                    <p className="font-medium">Ngày tạo:</p>
                    <p>{new Date(order.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList; 