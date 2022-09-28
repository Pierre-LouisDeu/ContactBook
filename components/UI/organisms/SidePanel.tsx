import React, { useContext } from "react";
import SaveButton from "../molecules/SaveButton";
import DeleteButton from "../molecules/DeleteButton";
import { ContactContext } from "../../../context/ContactContext";

const SidePanel: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  return (
    <>
      <div className="h-full flex justify-end items-end">
        <div className="pr-6">
          {contact}
          <SaveButton />
        </div>
        <DeleteButton />
      </div>
    </>
  );
};

export default SidePanel;
