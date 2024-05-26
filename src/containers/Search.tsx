import Filters from "../components/Filters";
import SearchResults from "../components/SearchResults";
import { API_KEY, API_URL } from "../utils/consts";
import axios from "axios";
import useSearchOptions from "../context/searchOptionsContext";
import DataWrapper from "./DataWrapper";

const retrieveResults = async (options: any) => {
  if (!options || options.query === "") {
    return {};
  }

  const params = {
    s: options.query,
    type: options.type,
    y: options.year,
    page: options.page,
    apikey: API_KEY,
  };
  const response = await axios.get(API_URL, { params });
  return response.data;
};

const Search = () => {
  const options = useSearchOptions();

  if (!options) {
    return <></>;
  }

  return (
    <>
      <Filters />
      <DataWrapper
        queryFn={() => retrieveResults(options)}
        queryKeys={["searchResults", JSON.stringify(options)]}
      >
        <SearchResults />
      </DataWrapper>
    </>
  );
};

export default Search;
