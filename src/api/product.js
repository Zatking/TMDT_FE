const apiUrl = import.meta.env.VITE_API_URL;
const apiPrivate = import.meta.env.VITE_API_PRIVATE;

class ProductsAPI {
  //get product
  async getProducts() {
    try {
      const res = await fetch(apiUrl + "/get-product");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  //order
  async orderProduct(
    productIds,
    quantities,
    TotalPrice,
    nameCus,
    phoneCus,
    addressCus,
    gender,
    Note
  ) {
    try {
      const res = await fetch(apiUrl + "/orderProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds,
          quantities,
          TotalPrice,
          nameCus,
          phoneCus,
          addressCus,
          gender,
          note: Note || "",
        }),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("❌ Lỗi đặt hàng:", error);
    }
  }
}

export default new ProductsAPI();
