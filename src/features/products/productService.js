import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async (userData) => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (userData) => {
  // i get this route from 'ecommerce-server/routes/productRoute'
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};


export const productService = {
  getProducts,
};
