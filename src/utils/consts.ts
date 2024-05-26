export const typeValues = [
  { label: "movie", value: "movie" },
  { label: "series", value: "series" },
  { label: "episode", value: "episode" },
];

const currentDate = new Date();

export const yearRange = {
  min: 1895, //magic value according to https://en.wikipedia.org/wiki/History_of_film
  max: currentDate.getFullYear(),
};

export const API_URL = "https://www.omdbapi.com/";
export const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
export const RESULTS_OFFSET = 10;
