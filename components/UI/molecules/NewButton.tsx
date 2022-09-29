import React from "react";
import Button from "../atoms/Button";

const NewButton: React.FunctionComponent<any> = ({setOpen}) => {
  const action = () => {
    setOpen(true);
  }
  return (
    <>
      <Button title="New" action={action} />
    </>
  );
};

export default NewButton;
