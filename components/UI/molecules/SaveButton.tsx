import React from "react";
import Button from "../atoms/Button";

const SaveButton: React.FunctionComponent = () => {
  const saveAction = () => {
    console.log("saved");
  };

  return (
    <>
      <Button title="Save" action={saveAction}/>
    </>
  );
};

export default SaveButton;
