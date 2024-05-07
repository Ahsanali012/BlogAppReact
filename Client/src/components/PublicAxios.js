import axios from "axios";



export const publicAxios = axios.create({
  baseURL: "https://localhost:5000",
});
