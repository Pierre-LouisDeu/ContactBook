import React, { useContext } from "react";
import SaveButton from "../molecules/SaveButton";
import DeleteButton from "../molecules/DeleteButton";
import EditableFields from "../molecules/EditableFields";
import Banner from "../molecules/Banner";
import { ContactContext } from "../../../context/ContactContext";

const SidePanel: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  return (
    <>
      {!contact.id && (
        <Banner title='Fill in the fields below and save to add a new contact' />
      )}
      <div className="h-full">
        <div className="flex flex-col justify-between h-full">
          <EditableFields />
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
