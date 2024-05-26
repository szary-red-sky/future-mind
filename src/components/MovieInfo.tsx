import { IChildrenProps } from "../utils/types";

const MovieInfo = ({ children }: IChildrenProps) => {
  return (
    <div className="w-full flex h-full flex-col items-start flex-2 ">
      {children}
    </div>
  );
};

export default MovieInfo;
