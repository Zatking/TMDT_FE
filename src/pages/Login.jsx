import { useState } from "react";
import bg from "../assets/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import { motion } from "framer-motion";

const Login = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [switchType, setSwitchType] = useState(false);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setRotation(rotation + 180);
    setScale(0.5);
    setTimeout(() => setScale(1), 1300);
    setTimeout(() => setSwitchType(!switchType), 1450);
    setShowText(false);
    setTimeout(() => setShowText(true), 1300);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
    >
      <motion.div
        className="bg-gray-200 bg-opacity-40 p-5 w-1/3 h-fit rounded-lg"
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
            className="text-lg text-black font-bold text-left font-serif"
          >
            WELCOME TO!
          </motion.h1>
          <motion.h1
            animate={{
              opacity: showText ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-lg text-black font-bold text-center font-serif"
          >
            OGGY ELECTRONIC E-COMMERCE
          </motion.h1>
          <motion.h1
            animate={{
              opacity: showText ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-black text-center text-2xl font-serif"
          >
            {switchType ? "Register" : "Login"}
          </motion.h1>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="my-2 w-[90%]">
              <motion.span
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-black font-serif"
              >
                Email
              </motion.span>
              <motion.input
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-sm w-full outline-none p-1 placeholder:text-gray-300"
                placeholder="abc@gmail.com"
              />
              <div className="my-2">
                <motion.span
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-black font-serif"
                >
                  Password
                </motion.span>
                <motion.input
                  animate={{
                    opacity: showText ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-sm w-full outline-none p-1 placeholder:text-gray-300"
                  type="password"
                />
              </div>
              {switchType && (
                <div className="my-2">
                  <motion.span
                    animate={{
                      opacity: showText ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-black font-serif"
                  >
                    Confirm Password
                  </motion.span>
                  <motion.input
                    animate={{
                      opacity: showText ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    type="password"
                    className="bg-white rounded-sm w-full outline-none p-1 placeholder:text-gray-300"
                  />
                </div>
              )}
              <motion.p
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[12px] font-serif text-black"
              >
                Forgot Password?
              </motion.p>
              <motion.button
                animate={{
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-black my-2 mt-4 text-white rounded-lg p-1"
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
                  className="ml-2 font-bold text-black cursor-pointer"
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
