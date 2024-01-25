const API_URL = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(productNumber) {
  try {
    const response = await fetch(`${API_URL}/products/${productNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}