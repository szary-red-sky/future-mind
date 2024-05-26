import { IRating } from "../utils/types";

interface Props {
  ratings: Array<IRating>;
}
const MovieRatings = ({ ratings }: Props) => {
  return ratings.length === 0 ? (
    <></>
  ) : (
    <section className="py-6">
      <h2 className="font-bold">Ratings</h2>
      <ul className="list-disc ml-4">
        {ratings.map((rating: any, key: any) => (
          <li key={`rating-${key}`}>
            <i>{rating.Source}</i> - {rating.Value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieRatings;
