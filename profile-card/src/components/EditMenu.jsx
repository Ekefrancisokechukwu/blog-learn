import { RxCross2 } from "react-icons/rx";
import { TbCameraPlus } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import { useGlobalContext } from "../context";

const EditMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userValues, handleChange, handleSubmit } = useGlobalContext();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div className="w-[30rem]  top-4 bg-white shadow-2xl rounded-xl py-7 px-10 text-center">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="border  py-2 px-7 rounded-xl"
        >
          Edit profile
        </button>
      </motion.div>

      <div
        className={`bg-white/60 fixed top-0 z-40 left-0  grid
       place-items-center transition-all duration-500 overflow-clip  backdrop-blur-[2px] backdrop-brightness-50  h-screen ${
         isModalOpen ? "w-full" : "w-0"
       }`}
      >
        <div className=" w-[33rem] rounded-md  h-[29rem] edit-container overflow-y-scroll pb-5  bg-white">
          <form onSubmit={handleSubmit} className="relative">
            <nav className="flex z-10 items-center  rounded-tl-md sticky bg-white w-full top-0 justify-between px-5 py-3">
              <button
                onClick={closeModal}
                type="button"
                className="hover:bg-gray-200 rounded-full grid place-items-center transition duration-500 w-[2rem] h-[2rem]"
              >
                <RxCross2 />
              </button>

              <h2 className="text-[1.1rem] capitalize font-semibold">
                Edit profile
              </h2>

              <button
                type="submit"
                onClick={closeModal}
                className="bg-gray-200 text-[1.1rem] py-1 px-5 hover:bg-gray-100 transition-colors rounded-2xl"
              >
                save
              </button>
            </nav>
            <div className="w-full relative h-[15rem] mt-1">
              {!userValues.coverImg ? (
                <img
                  src="https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png"
                  alt=""
                  className="rounded-tr-md rounded-tl-md animate-pulse"
                />
              ) : (
                <img
                  src="https://img.freepik.com/free-photo/black-white-minimal-portrait_23-2149152617.jpg?size=626&ext=jpg&ga=GA1.2.1083463234.1681973259&semt=ais"
                  alt=""
                  className="rounded-tr-md rounded-tl-md"
                />
              )}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-9">
                <div className=" cursor-pointer w-14 h-14  grid place-items-center hover:bg-white/30 transition duration-500 rounded-full ">
                  <label htmlFor="profileImg" className="cursor-pointer">
                    <TbCameraPlus className="text-white text-2xl" />
                    <input
                      type="file"
                      name="profileImg"
                      id="profileImg"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleChange}
                      className="appearance-none w-0 h-0 invisible hidden"
                    />
                  </label>
                </div>

                <div className=" cursor-pointer w-14 h-14  grid place-items-center hover:bg-white/30 transition duration-500 rounded-full ">
                  <RxCross2 className="text-2xl text-white" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-[6rem] h-[6rem] absolute -top-[3rem] left-4 rounded-full">
                {!userValues.profileImg ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="profile img"
                    className="rounded-full"
                  />
                ) : (
                  <img
                    src={userValues.profileImg}
                    alt="profile img"
                    className="rounded-full"
                  />
                )}

                <div className="absolute top-1/2 left-1/2 cursor-pointer w-7 h-7  grid place-items-center hover:bg-white/30 transition duration-500 rounded-full -translate-x-1/2 -translate-y-1/2">
                  <label htmlFor="profileImg" className="cursor-pointer">
                    <TbCameraPlus className="text-white" />
                    <input
                      type="file"
                      name="profileImg"
                      id="profileImg"
                      onChange={handleChange}
                      className="appearance-none w-0 h-0 invisible hidden"
                    />
                  </label>
                </div>
              </div>
              <div className="pt-16 px-4 flex flex-col gap-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    name
                  </label>
                  <input
                    autoComplete="off"
                    spellCheck="on"
                    autoCorrect="on"
                    className="form-input"
                    id="name"
                    type="text"
                    name="name"
                    value={userValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bio">
                    bio
                  </label>
                  <input
                    className="form-input"
                    id="bio"
                    type="text"
                    value={userValues.bio}
                    name="bio"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="location">
                    location
                  </label>
                  <input
                    className="form-input"
                    id="location"
                    type="text"
                    name="location"
                    value={userValues.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="displaywebsite">
                    website
                  </label>
                  <input
                    className="form-input"
                    id="displaywebsite"
                    type="text"
                    name="website"
                    value={userValues.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditMenu;
