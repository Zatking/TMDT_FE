const apiUrl = import.meta.env.VITE_API_URL;
const apiPrivate = import.meta.env.VITE_API_PRIVATE;

class AuthenAPI {
  async login(email, password) {
    if (!email || !password) {
      return alert("Vui lòng nhập đầy đủ thông tin.");
    }

    try {
      const response = await fetch(apiUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const role = data.role;
        localStorage.setItem("Role", role);
        console.log("Đăng nhập thành công.");
        return role;
      } else {
        return "failed";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async register(email, password, phone, address, birthday) {
    if (!email || !password || !phone || !address || !birthday) {
      return alert("Vui lòng nhập đầy đủ thông tin.");
    }
    try {
      const response = await fetch(apiUrl + "/register", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email, password, phone, address, birthday),
      });
      if (response.ok) {
        console.log("Đăng ký thành công.");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export default new AuthenAPI();
