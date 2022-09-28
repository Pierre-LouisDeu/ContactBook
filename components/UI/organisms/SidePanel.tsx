import React, { useContext } from "react";
import SaveButton from "../molecules/SaveButton";
import DeleteButton from "../molecules/DeleteButton";
import { ContactContext } from "../../../context/ContactContext";

const SidePanel: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  return (
    <>
      <div className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="font-semibold text-4xl py-2">
              {contact.firstName} {contact.lastName}
            </h1>
            <p className="text-2xl py-2">{contact.email}</p>
            <p className="text-2xl py-2">{contact.birthday}</p>
            <div className="border-2 border-dashed border-gray-200 h-full my-12"></div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="pr-6">
              <SaveButton />
            </div>
            <DeleteButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
