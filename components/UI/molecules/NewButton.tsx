import React from "react";
import Button from "../atoms/Button";

const NewButton: React.FunctionComponent<any> = ({setOpen}) => {
  return (
    <>
      <Button title="New" action={setOpen} />
    </>
  );
};

export default NewButton;
