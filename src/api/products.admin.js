const apiUrl = import.meta.env.VITE_API_URL;

class ProductAD {
  async getProducts() {
    console.log("get product");
    try {
      const res = await fetch(apiUrl + "/get-product");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  //create product
  async createProduct(product) {
    const response = await fetch(
      "https://node-tmdt.vercel.app/api/createProduct",
      {
        method: "POST",
        body: product,
      }
    );
    const data = await response.json();
    console.log("success", data);
    return data;
  }

  async deleteProduct(id) {
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
      return data;
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      return { error: error.message };
    }
  }
}
export default new ProductAD();
