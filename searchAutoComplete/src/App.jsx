import Search from "./components/search/Search";

function App() {
  return (
    <main className="bg-gray-200 h-screen pt-4 px-6">
      <h1 className="text-center text-2xl mt-2">Search Autocomplete</h1>

      <div className="mt-10">
        <Search />
      </div>
    </main>
  );
}

export default App;
