import { useEffect } from "react";
import router from "../router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessOrder = () => {
  useEffect(() => {
    setTimeout(() => {
      router.navigate("/");
    }, 3000);
  });
  return (
    <div className="h-[50vh] flex justify-center items-center w-full">
      <div>
        <p className="text-center">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "green", fontSize: "100px" }}
          />
        </p>
        <h1 className="text-3xl text-center text-black mt-10">Order Success</h1>
      </div>
    </div>
  );
};

export default SuccessOrder;
