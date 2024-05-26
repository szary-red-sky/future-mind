import useSearchOptions from "../context/searchOptionsContext";
import { RESULTS_OFFSET } from "../utils/consts";

interface Props {
  total: number;
}

const Pagination = ({ total }: Props) => {
  const searchOptions = useSearchOptions();
  if (!searchOptions) {
    return <></>;
  }
  const { page, setPage } = searchOptions;
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mx-2";
  return (
    <div className="text-center py-4 border-t">
      <button
        onClick={() => {
          setPage(Math.max(1, page - 1));
        }}
        className={buttonClass}
      >
        Previous
      </button>
      <span className="text-xl px-3">Page: {page}</span>
      <button
        onClick={() => {
          if (page * RESULTS_OFFSET < total) {
            setPage(page + 1);
          }
        }}
        className={buttonClass}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
