import EditMenu from "./EditMenu";
import PreviewCard from "./PreviewCard";

const ProfileCard = () => {
  return (
    <div
      className="max-w-[1270px] rounded-lg w-full py-7 px-5 gap-x-28 flex justify-center items-center 
     bg-gray-200  "
    >
      <PreviewCard />
      <EditMenu />
    </div>
  );
};
export default ProfileCard;
