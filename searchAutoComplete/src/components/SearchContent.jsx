/* eslint-disable react/prop-types */

const SearchContent = ({ autocomplete }) => {
  return (
    <div className="py-2">
      <ul>
        {autocomplete.map((data) => {
          const { show } = data;
          return (
            <li
              key={show.id}
              className="flex justify-between cursor-pointer transition duration-500 px-5 py-2 hover:bg-gray-200 text-gray-600 items-center"
            >
              <div className="flex gap-8 items-center">
                <img
                  src={show.image?.medium}
                  alt={show?.name}
                  className="w-[3rem]"
                />
                <h2 className="text-lg">{show?.name}</h2>
              </div>
              <h2>{show.rating.average || "N/A"}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SearchContent;
