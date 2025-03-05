import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import { motion } from "framer-motion";
import router from "../router/router";

const Login = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [switchType, setSwitchType] = useState(false);
  const [showText, setShowText] = useState(true);
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    birthday: "Sat Mar 25 2000 07:00:00 GMT+0700",
  });

  const handleClick = () => {
    setRotation(rotation + 180);
    setScale(0.5);
    setTimeout(() => setScale(1), 1300);
    setTimeout(() => setSwitchType(!switchType), 1450);
    setShowText(false);
    setTimeout(() => setShowText(true), 1300);
  };

  const handleLogin = async () => {
    console.log("login");

    if (!email || !password) {
      return alert("Vui lòng nhập đầy đủ thông tin.");
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.role;
        localStorage.setItem("Token", token);
        console.log("Đăng nhập thành công.");
        if (token === "admin") {
          router.navigate("/AD");
        } else {
          router.navigate("/");
        }
      } else {
        throw new Error("Đăng nhập không thành công.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    console.log("register");
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          register.email,
          register.password,
          register.phone,
          register.address,
          register.birthday
        ),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Đăng ký thành công.");
        router.navigate("/");
      } else {
        throw new Error("Đăng ký không thành công.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/024/060/424/large_2x/radiant-orange-bokeh-background-of-computer-processor-on-motherboard-ai-generated-free-photo.jpg)`,
      }}
      className="w-full h-[94.1vh] bg-cover bg-center flex justify-center items-center"
    >
      <motion.div
        className="bg-[#fff] px-6 py-10 w-1/3 h-fit rounded-xl"
        animate={{ rotateY: rotation, scale }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotateY: -rotation }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            animate={{
              opacity: showText ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[#ff0000] text-center text-4xl font-bold"
          >
            {switchType ? "Register" : "Login"}
          </motion.h1>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="my-2 w-[90%]">
              <div className="my-5 relative flex items-center">
                <motion.input
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  type="email"
                  value={email}
                  onChange={(e) => setMail(e.target.value)}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
                />
                <motion.span
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  id="email"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff] ${
                    email ? "hidden" : ""
                  }`}
                >
                  Email
                </motion.span>
              </div>
              <div className="my-5 relaive flex items-center">
                <motion.input
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg"
                />
                <motion.span
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff] ${
                    password ? "hidden" : ""
                  }`}
                >
                  Password
                </motion.span>
              </div>
              {switchType ? (
                <div>
                  <div className="relative my-5 flex items-center">
                    <motion.input
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      type="password"
                      value={register.confirmPassword}
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          confirmPassword: e.target.value,
                        })
                      }
                      className={`bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg ${
                        register.confirmPassword == register.password
                          ? "text-[#ff0000]"
                          : ""
                      }`}
                    />
                    <motion.span
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff] ${
                        register.confirmPassword ? "hidden" : ""
                      }`}
                    >
                      Confirm Password
                    </motion.span>
                  </div>
                  <div className="relative my-5 flex items-center">
                    <motion.input
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      type="number"
                      value={register.phone}
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          phone: e.target.value,
                        })
                      }
                      className={`bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg`}
                    />
                    <motion.span
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff] ${
                        register.phone ? "hidden" : ""
                      }`}
                    >
                      Phone
                    </motion.span>
                  </div>
                  <div className="relative my-5 flex items-center">
                    <motion.input
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      type="text"
                      value={register.address}
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          address: e.target.value,
                        })
                      }
                      className={`bg-[#fff] bg-opacity-60 w-full outline-none px-3 py-2 peer shadow-sm shadow-[#ff0000] rounded-lg`}
                    />
                    <motion.span
                      animate={{
                        opacity: showText ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`text-black absolute peer-focus:-translate-y-5 transition-all duration-500 ease-linear rounded-t-lg px-1 ml-2 bg-[#fff] ${
                        register.address ? "hidden" : ""
                      }`}
                    >
                      Address
                    </motion.span>
                  </div>
                </div>
              ) : (
                <motion.p
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-sm text-[#000] hover:text-[#ff0000] cursor-pointer w-fit py-2"
                >
                  Forgot Password?
                </motion.p>
              )}

              <motion.button
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                onClick={switchType ? handleRegister : handleLogin}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-black hover:bg-[#ff0000] my-2 mt-10 text-white rounded-lg py-4 text-xl font-bold shadow-inner"
              >
                {switchType ? "Register" : "Login"}
              </motion.button>
              <motion.p
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center text-black mt-4"
              >
                or continue with
              </motion.p>
              <div className="flex justify-center items-center">
                <motion.button
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white flex items-center rounded-lg py-1 h-fit px-7 m-2"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#1083da" }}
                    className="text-2xl"
                  />
                </motion.button>
                <motion.button
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white flex items-center rounded-lg py-1 h-fit px-7 m-2"
                >
                  <img src={google} alt="Google" className="w-6 h-6" />
                </motion.button>
                <motion.button
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white flex items-center rounded-lg py-1 h-fit px-7 m-2"
                >
                  <img src={microsoft} alt="Microsoft" className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex justify-center">
                <motion.span
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-black"
                >
                  {"Don't"} have an account yet?
                </motion.span>
                <motion.span
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="ml-2 font-bold text-black hover:text-[#ff0000] cursor-pointer"
                  onClick={handleClick}
                >
                  {switchType ? "Login" : "Register for free"}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
