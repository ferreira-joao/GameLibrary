import axios from "axios";

const env = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: `https://api.rawg.io/api/games?key=${env}&page_size=5`,
});

export default api;
