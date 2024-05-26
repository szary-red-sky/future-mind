import { createContext, useContext, useEffect, useState } from "react";
import { ISearchOptionsContext } from "../utils/types";

export const searchOptionsContext = createContext<ISearchOptionsContext | null>(
  null
);

interface searchOptionsProviderProps {
  children: React.ReactNode;
}

export const SearchOptionsProvider: React.FC<searchOptionsProviderProps> = ({
  children,
}) => {
  const DEFAULT_PAGE = 1;
  const [query, setQuery] = useState<string>("");
  const [year, setYear] = useState<number | undefined>();
  const [type, setType] = useState<string | null>(null);
  const [page, setPage] = useState<number>(DEFAULT_PAGE);

  useEffect(() => {
    setPage(DEFAULT_PAGE);
  }, [query, year, type]);

  return (
    <searchOptionsContext.Provider
      value={{
        query,
        setQuery,
        year,
        setYear,
        type,
        setType,
        page,
        setPage,
      }}
    >
      {children}
    </searchOptionsContext.Provider>
  );
};

export default function useSearchOptions() {
  const context = useContext(searchOptionsContext);

  if (context === undefined) {
    throw new Error(
      "useSearchOptions must be used within a searchOptionsProvider"
    );
  }

  return context;
}
