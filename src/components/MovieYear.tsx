import { IChildrenProps } from "../utils/types";

const MovieYear = ({ children }: IChildrenProps) => {
  return <div className="text-slate-600 mb-1">Year {children}</div>;
};

export default MovieYear;
