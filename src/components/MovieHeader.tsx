import { IChildrenProps } from "../utils/types";

const MovieHeader = ({ children }: IChildrenProps) => {
  return (
    <section className="flex w-full flex-col sm:flex-row justify-between items-start">
      {children}
    </section>
  );
};

export default MovieHeader;
