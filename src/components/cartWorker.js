// cartWorker.js
let lastCartData = null;

const fetchCartItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/cartItems");
    if (!response.ok) throw new Error("Failed to fetch cart items");
    const json = await response.json();
    return json;
  } catch (error) {
    return { error: error.message };
  }
};

const compareCartItems = (newData, oldData) => {
  return JSON.stringify(newData) !== JSON.stringify(oldData);
};

setInterval(async () => {
  const newCartData = await fetchCartItems();
  if (newCartData.error) {
    postMessage({ error: newCartData.error });
  } else if (lastCartData === null || compareCartItems(newCartData, lastCartData)) {
    lastCartData = newCartData;
    postMessage({ cartItems: newCartData });
  }
}, 250);