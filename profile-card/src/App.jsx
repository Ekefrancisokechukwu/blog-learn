import ProfileCard from "./components/ProfileCard";
import { AiOutlineGithub } from "react-icons/ai";

function App() {
  return (
    <>
      <main className="grid place-items-center p-10 h-screen">
        <ProfileCard />

        <div className=" mt-8 py-3">
          <a href="">
            <AiOutlineGithub className="text-2xl" />
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
