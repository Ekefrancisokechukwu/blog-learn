import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useClickOutside from "../../lib/hooks/useClickOutside";
import SearchContent from "../SearchContent";
import { useDebounce } from "use-debounce";
import { searchQuery } from "../../lib/encode";

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [value] = useDebounce(searchParams, 1000);
  const isEmpty = !autocomplete || autocomplete.length === 0;

  const collapes = () => {
    setIsExpanded(false);
    setSearchParams("");
    setAutocomplete([]);
    setNoData(false);
  };
  const { ref } = useClickOutside(collapes);
  const expand = () => {
    setIsExpanded(true);
  };

  const fetchData = async () => {
    if (!searchParams || searchParams.trim() === "") return;
    setLoading(true);
    try {
      const url = searchQuery(searchParams);
      const response = await fetch(url);

      if (response) {
        const dataResponse = await response.json();
        if (dataResponse.length === 0) {
          setNoData(true);
        } else {
          setNoData(false);
        }

        setAutocomplete(dataResponse);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={ref}
      className="max-w-[700px]   sm:w-[500px] w-full mx-auto relative shadow-xl"
    >
      <button className="absolute transition-colors hover:text-black top-1/2 -translate-y-1/2 left-4 text-xl text-gray-600">
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        placeholder="Find..."
        onFocus={expand}
        className="outline-none border py-2 px-12  w-full rounded-md text-lg"
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />
      {loading && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <span className="block animate-spin border-t-2 border-l-2 rounded-full border-black w-4 h-4"></span>
        </div>
      )}

      <div
        className={`absolute transition-all overflow-y-scroll w-full rounded-md bg-white shadow-md  ${
          isExpanded ? "h-[20rem] opacity-100" : "h-0 opacity-0"
        }`}
      >
        {noData && (
          <h1 className="text-center text-gray-400 text-lg mt-6">
            Nothing found...
          </h1>
        )}
        {isEmpty && !noData && (
          <h1 className="text-center text-gray-400 text-lf mt-6">
            Start Searching...
          </h1>
        )}

        {!isEmpty && <SearchContent autocomplete={autocomplete} />}
      </div>
    </form>
  );
};
export default Search;
