import React, {useContext} from "react";
import Button from "../atoms/Button";
import { ContactContext } from "../../../context/ContactContext";

const EditableFields: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);

  return (
    <>
      <h1 className="font-semibold text-4xl py-2">
        {contact.firstName} {contact.lastName}
      </h1>
      <p className="text-2xl py-2">{contact.email}</p>
      <p className="text-2xl py-2">{contact.birthday}</p>
      <div className="border-2 border-dashed border-gray-200 h-full my-12"></div>
    </>
  );
};

export default EditableFields;
