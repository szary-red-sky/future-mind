export interface ISearchOptionsContext {
  query: string;
  setQuery: (value: string) => void;
  year: number | undefined;
  setYear: (value: number | undefined) => void;
  type: string | null;
  setType: (value: string | null) => void;
  page: number;
  setPage: (value: number) => void;
}

export interface IOption {
  label: string;
  value: string | null;
}

export interface IChildrenProps {
  children: React.ReactNode | React.ReactPortal;
}

export interface IResults {
  Search?: Array<IResult>;
  totalResults?: string;
  Response: string; // "True" | "False"
  Error?: string;
}

export enum EMovieType {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}

interface IResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: EMovieType;
  Poster: string;
}

export interface IMovie {
  BoxOffice?: string;
  DVD?: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<IRating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: EMovieType;
  totalSeasons?: string;
  Response: string;
  Website?: string;
  Production?: string;
}

export interface IRating {
  Source: string;
  Value: string;
}
