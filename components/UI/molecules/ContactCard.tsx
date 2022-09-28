import React, { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";

type setOpenType = {
  (param: boolean | null): void;
};

type ContactProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  setOpen: setOpenType;
};

const ContactCard: React.FunctionComponent<ContactProps> = ({
  id,
  firstName,
  lastName,
  email,
  birthday,
  setOpen,
}) => {
  const { setContact } = useContext(ContactContext);
  const select = () => {
    setContact({ id, firstName, lastName, email, birthday });
    setOpen(true);
  };

  return (
    <>
      <button
        className="w-1/2"
        onClick={() => {
          select();
        }}
      >
        <div className="bg-base-100 border rounded-lg py-2 shadow-md hover:bg-gray-50">
          <div className="text-left pl-4">
            <h2 className="font-semibold text-xl ">{firstName} {lastName}</h2>
            <p>{email}</p>
            <p>{birthday}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default ContactCard;
