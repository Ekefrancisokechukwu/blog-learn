import { BsInboxes } from "react-icons/bs";
import { GoLink } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";

const PreviewCard = () => {
  const { user } = useGlobalContext();

  return (
    <div className="rounded-md w-[25rem]  relative shadow-2xl px-5 py-7 ">
      <div className="w-full h-full">
        {!user?.coverImg ? (
          <img
            src="https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png"
            alt=""
            className="animate-pulse h-[34rem]"
          />
        ) : (
          <img
            src="https://img.freepik.com/free-photo/black-white-minimal-portrait_23-2149152617.jpg?size=626&ext=jpg&ga=GA1.2.1083463234.1681973259&semt=ais"
            alt=""
            className="rounded"
          />
        )}
      </div>
      <div className="p-2 bg-white/25  absolute    top-[12rem] w-[91%] left-1/2 -translate-x-1/2 ">
        <div className="clip  absolute bg-white rounded-md inset-0 -z-10 "></div>
        <div className="w-[5rem] z-20 top-[5rem] h-[5rem] absolute rounded-full ">
          {!user?.profileImg ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt=""
              className=" rounded-full animate-pulse"
            />
          ) : (
            <img
              src="https://img.freepik.com/free-photo/black-white-minimal-portrait_23-2149152619.jpg?size=626&ext=jpg&ga=GA1.2.1083463234.1681973259&semt=ais"
              alt=""
              className=" rounded-full"
            />
          )}
        </div>
        <div className="mt-[10rem]">
          {!user?.name ? (
            <div className="bg-gray-200 h-5 w-[12rem] rounded-md  animate-pulse"></div>
          ) : (
            <h1 className="text-2xl font-semibold">{user.name}</h1>
          )}

          <div className="flex mt-2 items-center flex-wrap gap-y-3  gap-x-6">
            {!user?.bio ? (
              <div className="bg-gray-200 h-3 w-[10rem] rounded-md  animate-pulse"></div>
            ) : (
              <h3 className="flex gap-3 items-center mt-2 capitalize font-medium text-[1rem]">
                <BsInboxes />
                <span>{user.bio}</span>
              </h3>
            )}
            {!user?.website ? (
              <div className="bg-gray-200 h-3 w-[10rem] rounded-md  animate-pulse"></div>
            ) : (
              <a
                href={user.website}
                className="flex gap-3 items-center mt-2 capitalize font-medium text-[1rem]"
              >
                <GoLink />
                <span>{user.website}</span>
              </a>
            )}
            {!user?.location ? (
              <div className="bg-gray-200 h-3 w-[10rem] rounded-md  animate-pulse"></div>
            ) : (
              <h3 className="flex gap-3 items-center mt-2 capitalize font-medium text-[1rem]">
                <IoLocationOutline />
                <span>{user.location}</span>
              </h3>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2">
            <button className="capitalize bg-white py-3 px-4 shadow-md">
              Add
            </button>
            <button className="capitalize bg-gray-200 py-3 px-4">
              200 followers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreviewCard;
