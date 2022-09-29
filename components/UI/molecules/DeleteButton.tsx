import React, {useContext} from "react";
import Button from "../atoms/Button";
import { ContactContext } from "../../../context/ContactContext";

const DeleteButton: React.FunctionComponent= () => {
  const { contact } = useContext(ContactContext);

  const deleteAction = () => {
    console.log("delete contact n", typeof contact, contact.id);
  };

  return (
    <>
      <Button title="Delete" action={deleteAction} />
    </>
  );
};

export default DeleteButton;
