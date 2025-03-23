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
}
export default new ProductAD();
