import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddPro = () => {
  const [products, setProducts] = useState({
    ProName: "",
    Price: 0,
    Image: "",
    Description: "",
    Category: "",
    SoldQuantity: 0,
    RemainQuantity: 0,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ProName", products.ProName);
    formData.append("Price", products.Price);
    formData.append("Images", products.Images);
    formData.append("Description", products.Description);
    formData.append("Category", products.Category);
    formData.append("SoldQuantity", products.SoldQuantity);
    formData.append("RemainQuantity", products.RemainQuantity);

    const fetchAddPro = async () => {
      try {
        const response = await fetch(
          "https://node-tmdt.vercel.app/api/createProduct",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddPro();
  };

  return <div></div>;
};

export default AddPro;
