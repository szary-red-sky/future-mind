import { NavLink } from "react-router-dom";
import { IChildrenProps } from "../utils/types";

interface Props extends IChildrenProps {
  linkTo: string;
}

const SearchResult = ({ linkTo, children }: Props) => {
  return (
    <NavLink
      to={linkTo}
      className="p-4 hover:bg-slate-200 transition flex w-full border-b items-center"
    >
      {children}
    </NavLink>
  );
};

export default SearchResult;
