import React from "react";
import Button from "../atoms/Button";

const NewButton: React.FunctionComponent<any> = ({action, setOpen}) => {
  return (
    <>
      <Button title="New" type="primary" action={setOpen} />
    </>
  );
};

export default NewButton;
