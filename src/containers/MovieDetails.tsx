import { IMovie } from "../utils/types";
import MoviePoster from "../components/MoviePoster";
import MovieType from "../components/MovieType";
import SearchResultTitle from "../components/SearchResultTitle";
import MovieYear from "../components/MovieYear";
import ImdbRating from "../components/ImdbRating";
import MovieInfo from "../components/MovieInfo";
import MovieHeader from "../components/MovieHeader";
import MoviePlot from "../components/MoviePlot";
import MovieRatings from "../components/MovieRatings";
import MovieProps from "../components/MovieProps";

const excluedKeys = [
  "Title",
  "Year",
  "Plot",
  "Poster",
  "Type",
  "imdbRating",
  "imdbVotes",
  "imdbID",
  "Ratings",
  "Response",
];

function MovieDetails({ data }: { data?: IMovie }) {
  return (
    <div>
      {data?.Response === "True" ? (
        <>
          <MovieHeader>
            <MoviePoster url={data.Poster} title={data.Title} large />
            <MovieInfo>
              <SearchResultTitle>{data.Title}</SearchResultTitle>
              <MovieYear>{data.Year}</MovieYear>
              <MovieType type={data.Type} />
            </MovieInfo>
            <ImdbRating
              rating={data.imdbRating}
              votes={data.imdbVotes}
              id={data.imdbID}
            />
          </MovieHeader>

          <MoviePlot>{data.Plot}</MoviePlot>

          <MovieRatings ratings={data.Ratings} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-2">
            {Object.entries(data).map(([key, value]) => {
              if (excluedKeys.includes(key)) {
                return <></>;
              }
              return <MovieProps label={key} value={value} />;
            })}
          </div>
        </>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
}

export default MovieDetails;
