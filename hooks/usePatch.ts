import { useContext } from "react";
import { ReloadContext } from "../context/ReloadContext";

const usePatch = () => {
  const { setReload } = useContext(ReloadContext);

  type ContactType = {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    info: string;
    id: number;
  };

  const patchContact = async (contact: ContactType) => {
    await fetch(`http://localhost:8000/contacts/${contact.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then(() => {
        console.log("Contact updated");
        setReload(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { patchContact };
};

export default usePatch;
