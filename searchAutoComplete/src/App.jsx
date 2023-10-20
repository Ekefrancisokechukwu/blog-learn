import logo from "../src/assets/logo.svg";
import Search from "./components/search/Search";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <main className="bg-gray-200 h-screen pt-4 px-6">
      <h1 className="text-center text-2xl mt-2">
        Search Autocomplete Searchbar
      </h1>

      <div className="mt-10">
        <Search />
      </div>

      <footer className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-[1.5rem]" />{" "}
          <h2 className="text-gray-500 text-xl font-bold">specter</h2>
        </div>
        <a
          href="https://github.com/Ekefrancisokechukwu/blog-learn/tree/main/searchAutoComplete"
          target="_blank"
          rel="noreferrer"
          className="text-xl"
        >
          <AiFillGithub />
        </a>
      </footer>
    </main>
  );
}

export default App;
