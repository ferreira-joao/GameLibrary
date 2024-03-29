import api from "./api";

const env = import.meta.env.VITE_API_KEY;

export const getGames = (search: string, size: number) => {
  return api
    .get(`/api/games?key=${env}&page_size=${size}&search=${search}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.log(err));
};

export const getGameDetails = (id: string | undefined) => {
  return api
    .get(`/api/games/${id}?key=${env}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getGameScreenshots = (id: string | undefined) => {
  return api
    .get(`/api/games/${id}/screenshots?key=${env}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.log(err));
};
