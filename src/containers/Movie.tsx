import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../utils/consts";
import axios from "axios";
import DataWrapper from "./DataWrapper";
import MovieDetails from "./MovieDetails";

const retrieveDetails = async (id: string | undefined) => {
  if (id === "") {
    return {};
  }
  const params = {
    i: id,
    plot: "full",
    apikey: API_KEY,
  };
  const response = await axios.get(API_URL, { params });
  return response.data;
};

const Movie = () => {
  let { id } = useParams<string>();

  if (!id) {
    return <>No movie id</>;
  }
  return (
    <DataWrapper queryKeys={["movie", id]} queryFn={() => retrieveDetails(id)}>
      <MovieDetails />
    </DataWrapper>
  );
};

export default Movie;
