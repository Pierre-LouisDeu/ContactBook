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
        className="w-full"
        onClick={() => {
          select();
        }}
      >
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center ">{firstName} {lastName}</h2>
            <p>{email}</p>
            <p>{birthday}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default ContactCard;
