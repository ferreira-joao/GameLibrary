import api from "./api";

const env = import.meta.env.VITE_API_KEY;

export const getGames = () => {
  return api
    .get(`/api/games?key=${env}&page_size=16&search=`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.log(err));
};
