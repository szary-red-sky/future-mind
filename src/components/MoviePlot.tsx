import { IChildrenProps } from "../utils/types";

const MoviePlot = ({ children }: IChildrenProps) => {
  return (
    <section className="py-3 bg-slate-100 px-3 my-3 rounded">
      <h2 className="font-bold	">Plot</h2>
      <p className="leading-6">{children}</p>
    </section>
  );
};

export default MoviePlot;
