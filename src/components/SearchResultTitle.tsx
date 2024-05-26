import React from "react";
import { IChildrenProps } from "../utils/types";

const SearchResultsTitle = ({ children }: IChildrenProps) => {
  return <h2 className="font-bold text-lg mb-2">{children}</h2>;
};

export default SearchResultsTitle;
