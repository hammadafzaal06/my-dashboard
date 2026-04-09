// src/utils/orderService.js
const BASE_URL = "https://69d75bca9c5ebb0918c76f14.mockapi.io/api/v1/orders";

export const fetchOrdersFromAPI = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch orders");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};