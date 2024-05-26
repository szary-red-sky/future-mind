import { ChangeEvent } from "react";
import Select, { SingleValue } from "react-select";
import useSearchOptions from "../context/searchOptionsContext";
import { typeValues, yearRange } from "../utils/consts";
import { IOption } from "../utils/types";

function Filters() {
  const searchOptions = useSearchOptions();

  if (!searchOptions) {
    return null;
  }

  const { setQuery, setYear, setType } = searchOptions;

  const handleYearInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      setYear(undefined);
      return;
    }

    const value = parseInt(event.currentTarget.value, 10);
    if ((value >= yearRange.min && value <= yearRange.max) || !value) {
      setYear(value);
    }
  };

  const handleQueryInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 2) {
      setQuery(event.currentTarget.value);
    }
  };

  const handleTypeInput = (data: SingleValue<IOption>) => {
    if (data) {
      setType(data.value);
    } else {
      setType(null);
    }
  };

  return (
    <div className="md:sticky top-0 bg-slate-50 shadow p-4">
      <label htmlFor="search">Search by name (min. 3 charactes)</label>
      <input
        type="text"
        id="search"
        minLength={3}
        placeholder="Type at least 3 characters"
        onChange={handleQueryInput}
        className="border w-full rounded h-8 p-2 mb-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />

      <label htmlFor="year">Year of production</label>
      <input
        type="number"
        min={yearRange.min}
        max={yearRange.max}
        id="year"
        placeholder="Type at least 3 characters"
        onChange={handleYearInput}
        className="border w-full rounded h-8 p-2 mb-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />

      <label htmlFor="type">Type</label>
      <Select
        id="type"
        options={typeValues}
        placeholder="Select type"
        className="mb-3"
        isClearable
        onChange={handleTypeInput}
      />
      <button type="submit">Search</button>
    </div>
  );
}

export default Filters;
