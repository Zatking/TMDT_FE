import { useState } from "react";
import { motion } from "framer-motion";

export default function RotatingBox() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setRotation(rotation + 180);
    }, 1000);
    setScale(0.5);
    setTimeout(() => setScale(1), 1500);

    setShowText(false);
    setTimeout(() => setShowText(true), 1300);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <motion.div
        className="w-40 h-40 bg-blue-500 flex justify-center items-center rounded-lg cursor-pointer"
        animate={{
          rotate: rotation,
          scale: scale,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={handleClick}
      >
        <motion.span
          className="text-white text-xl font-bold"
          animate={{
            opacity: showText ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Click Me
        </motion.span>
      </motion.div>
    </div>
  );
}
