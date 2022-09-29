import React, { useContext } from "react";
import SaveButton from "../molecules/SaveButton";
import DeleteButton from "../molecules/DeleteButton";
import EditableFields from "../molecules/EditableFields"

const SidePanel: React.FunctionComponent = () => {
  return (
    <>
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
