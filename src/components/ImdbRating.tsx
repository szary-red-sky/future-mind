import { Link } from "react-router-dom";

interface Props {
  rating: string;
  votes: string;
  id: string;
}

function ImdbRating({ rating, votes, id }: Props) {
  return (
    <Link
      to={`https://www.imdb.com/title/${id}`}
      className="bg-[#f6c519] w-full sm:w-auto color-black flex flex-col mt-3 sm:mt-0 text-center p-2 rounded hover:opacity-85"
    >
      <div className="text-nowrap">Imdb Rating</div>
      <div>
        <b className="text-xl">{rating}</b>/10
        <br />
        <small className="text-xs text-nowrap	">{votes} votes</small>
      </div>
    </Link>
  );
}

export default ImdbRating;
