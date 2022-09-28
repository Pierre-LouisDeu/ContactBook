import React, { useContext } from 'react';
import { ContactContext } from "../../../context/ContactContext";

type ContactProps = {
  id: number;
  name: string;
  email: string;
  birthday: string;
};

const ContactCard: React.FunctionComponent<ContactProps> = ({
  id,
  name,
  email,
  birthday,
}) => {
  const { setContact } = useContext(ContactContext);
  return (
    <>
      <button className="w-full" onClick={() => {setContact(id)}}>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center ">{name}</h2>
            <p>{email}</p>
            <p>{birthday}</p>
          </div>
        </div>
      </button> 
    </>
  );
};

export default ContactCard;
