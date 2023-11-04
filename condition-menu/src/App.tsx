import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [data, setData] = useState<{ make: string; model: string }[]>([]);
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const query = searchParams.get("search");

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchParams(
      (prev) => {
        prev.set("search", value);
        return prev;
      },
      { replace: true }
    );

    const filteredData = data.filter((result) => {
      const make = result.make.toLocaleLowerCase();
      return make.includes(value);
    });
    setData(filteredData);
  };

  const haFetch = async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/cars?limit=2&model=${query}`,
        {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      if (!response.ok) throw new Error("there was an error");
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    haFetch();
  }, [query]);

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="">
        <div className="flex items-center gap-x-3">
          <input
            type="text"
            placeholder="Search"
            // value={query}
            onChange={handlechange}
            className="p-2 focus:outline  border rounded-lg w-72"
          />
        </div>
        <div className="mt-7">
          {data &&
            data.map((result, i) => {
              return (
                <h1 key={i} className="flex gap-5 text-lg">
                  {result.make} <span>{result.model}</span>
                </h1>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
