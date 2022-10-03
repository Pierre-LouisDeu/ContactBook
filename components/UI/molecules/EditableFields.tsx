import React, { useState, useContext } from "react";
import { ContactContext } from "../../../contexts/ContactContext";

const EditableFields: React.FunctionComponent = () => {
  const { contact, setContact } = useContext(ContactContext);
  const [dateIsSelect, setDateIsSelect] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstName = e.target.value.split(" ")[0];
    const lastName = e.target.value.split(" ")[1];
    !lastName
      ? setContact({ ...contact, firstName, lastName: "" })
      : setContact({ ...contact, firstName, lastName });
  };

  return (
    <>
      <h1 className="font-semibold text-4xl py-2 flex flex-row">
        <input
          type="firstName"
          name="firstName"
          id="firstName"
          className="block rounded-md border-white focus:border-indigo-500 px-1 py-2 placeholder:text-gray-900 placeholder:text-4xl focus:placeholder:text-gray-400 w-full"
          placeholder={
            contact.id
              ? contact.firstName + " " + contact.lastName
              : "First Name / Last Name"
          }
          onChange={handleNameChange}
        />
      </h1>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-white focus:border-indigo-500 text-2xl px-2 my-1 placeholder:text-gray-900 focus:placeholder:text-gray-400"
        placeholder={contact.id ? contact.email : "email@email.com"}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      {dateIsSelect || !contact.id ? (
        <input
          type="date"
          name="birthday"
          id="birthday"
          className="block w-full rounded-md border-white focus:border-indigo-500 my-1 text-2xl px-2 my-1 focus:text-gray-400"
          onChange={(e) => setContact({ ...contact, birthday: e.target.value })}
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
      <textarea
        rows={3}
        name="comment"
        id="comment"
        placeholder="Add informations..."
        className="mt-8 mb-32 px-4 resize-none h-full block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={contact.info}
        onChange={(e) => setContact({ ...contact, info: e.target.value })}
      />
    </>
  );
};

export default EditableFields;
