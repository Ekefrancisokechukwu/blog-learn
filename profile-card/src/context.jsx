/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [userValues, setUserValues] = useState({
    profileImg: "",
    coverImg: null,
    name: "",
    bio: "",
    website: "",
    location: "",
  });
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userValues.name) {
      return;
    }

    // const profileImage = `${window.location.protocol}${userValues.profileImg}`;

    const user = {
      profileImg: userValues.profileImg,
      coverImg: userValues.coverImg,
      name: userValues.name,
      bio: userValues.bio,
      website: userValues.website,
      location: userValues.location,
    };

    setUser(user);

    // console.log(user);
  };

  // const imgChange = (ev) => {
  //   setProf(URL.createObjectURL(ev.target.files[0]));
  //   console.log(prof);
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "profileImg" || name === "coverImg") {
      setUserValues({
        ...userValues,
        [name]: URL.createObjectURL(e.target.files[0]),
      });

      console.log(`${URL.createObjectURL(e.target.files[0])}`);
    }

    setUserValues({ ...userValues, [name]: value });
  };

  return (
    <GlobalContext.Provider
      value={{ userValues, user, handleChange, handleSubmit }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
