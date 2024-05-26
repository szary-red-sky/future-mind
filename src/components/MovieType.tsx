import { EMovieType } from "../utils/types";

interface Props {
  type: EMovieType;
}

const getColor = (type: EMovieType) => {
  if (type === "movie") {
    return "bg-blue-900";
  }
  if (type === "series") {
    return "bg-green-900";
  }
  if (type === "episode") {
    return "bg-red-900";
  }
  return "bg-gray-900";
};

const MovieType = ({ type }: Props) => {
  return (
    <div
      className={`bg-blue-900 text-white inline-block px-2 text-sm rounded mt-2 ${getColor(
        type
      )}`}
    >
      {type}
    </div>
  );
};

export default MovieType;
