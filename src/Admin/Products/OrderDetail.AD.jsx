import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    const fetchOrder = async () => {
        try {
            const response = await fetch(`${apiUrl}/getOrderByID/${id}`);
            const data = await response.json();
            setOrder(data.order);
            console.log(data.order);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    if (!order) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-xl p-6">
                    <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-4">Chi Tiết Đơn Hàng</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Mã Đơn Hàng</label>
                                <input type="text" value={order._id} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Tên Khách Hàng</label>
                                <input type="text" value={order.customer.name} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Số Điện Thoại</label>
                                <input type="text" value={order.customer.phone} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Địa Chỉ</label>
                                <input type="text" value={order.customer.address} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Tổng Tiền</label>
                                <input type="text" value={`${order.TotalPrice.toLocaleString()} VND`} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <label className="block text-base font-bold text-gray-700">Ngày Tạo</label>
                                <input type="text" value={new Date(order.createdAt).toLocaleString()} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
                        <label className="block text-base font-bold text-gray-700 mb-2">Trạng Thái</label>
                        <input type="text" value={order.status} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base bg-white" />
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm trong đơn hàng</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Mã Sản Phẩm</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Số Lượng</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {order.items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.productIds}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.quantities}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
