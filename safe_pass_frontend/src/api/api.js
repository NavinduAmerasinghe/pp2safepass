import axios from "axios";

const api = axios.create({
  //baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://localhost:8000",
  baseURL: "https://safe-pass.onrender.com",
});

export default api;
