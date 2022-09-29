import { useContext } from "react";
import { ReloadContext } from "../context/ReloadContext";

const usePost = () => {
  const { setReload } = useContext(ReloadContext);

  type ContactType = {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    id: number;
  };

  const postContact = async (contact: ContactType) => {
    await fetch('http://localhost:8000/contacts/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then(() => {
        console.log("Contact added");
        setReload(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { postContact };
};

export default usePost;
