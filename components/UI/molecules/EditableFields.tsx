import React, { useState, useContext } from "react";
import Button from "../atoms/Button";
import { ContactContext } from "../../../context/ContactContext";

const EditableFields: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  const [dateisSelect, setDateIsSelect] = useState(false);

  return (
    <>
      <h1 className="font-semibold text-4xl py-2 flex flex-row">
        <input
          type="firstName"
          name="firstName"
          id="firstName"
          className="block rounded-md border-white focus:border-indigo-500 px-1 my-1 placeholder:text-gray-900 placeholder:text-4xl focus:placeholder:text-gray-400 w-full"
          placeholder={contact.firstName + " " + contact.lastName}
        />
      </h1>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-white focus:border-indigo-500 text-2xl px-2 my-1 placeholder:text-gray-900 focus:placeholder:text-gray-400"
        placeholder={contact.email}
      />
      {dateisSelect ? (
        <input
          type="date"
          name="birthday"
          id="birthday"
          className="block w-full rounded-md border-white focus:border-indigo-500 my-1 text-2xl px-2 my-1 focus:text-gray-400"
        />
      ) : (
        <button
          className="text-2xl py-2 pl-2 text-left"
          onClick={() => {
            setDateIsSelect(true);
          }}
        >
          {contact.birthday}
        </button>
      )}

      <div className="border-2 border-dashed border-gray-200 h-full my-12"></div>
    </>
  );
};

export default EditableFields;
