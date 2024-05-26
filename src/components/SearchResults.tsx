import SearchResult from "./SearchResult";
import MovieInfo from "./MovieInfo";
import MoviePoster from "./MoviePoster";
import SearchResultTitle from "./SearchResultTitle";
import MovieYear from "./MovieYear";
import MovieType from "./MovieType";
import Pagination from "./Pagination";
import { IResults } from "../utils/types";

function SearchResults({ data }: { data?: IResults }) {
  return (
    <>
      <div className="py-2">Total results: {data?.totalResults || 0}</div>
      {data?.Search && (
        <div>
          {data.Search.map((item: any, key: any) => (
            <SearchResult
              linkTo={`/details/${item.imdbID}`}
              key={`result-${item.imdbID}`}
            >
              <MoviePoster url={item.Poster} title={item.Title} />
              <MovieInfo>
                <SearchResultTitle>{item.Title}</SearchResultTitle>
                <MovieYear>{item.Year}</MovieYear>
                <MovieType type={item.Type} />
              </MovieInfo>
            </SearchResult>
          ))}
          <Pagination total={parseInt(data?.totalResults || "0")} />
        </div>
      )}
    </>
  );
}

export default SearchResults;
