import React from "react";
import SaveButton from "../molecules/SaveButton";
import DeleteButton from "../molecules/DeleteButton";

const SidePanel: React.FunctionComponent = () => {
  return (
    <>
      <div className="h-full flex justify-end items-end">
        <div className="pr-6">
          <SaveButton />
        </div>
        <DeleteButton />
      </div>
    </>
  );
};

export default SidePanel;
