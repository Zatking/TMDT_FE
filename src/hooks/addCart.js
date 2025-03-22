let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addCart = (item) => {
  console.log("Adding to cart:", item);

  if (!item || typeof item._id === "undefined") {
    console.error("Invalid item format");
    return;
  }

  let newItem = { ...item, quantity: item.quantity ? item.quantity : 1 };

  const existingItem = cart.find((i) => i._id === newItem._id);

  if (existingItem) {
    existingItem.quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }

  window.location.reload();

  localStorage.setItem("cart", JSON.stringify(cart));
};

export { addCart };
