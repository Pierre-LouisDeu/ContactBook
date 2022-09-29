import React, { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";
import { PanelContext } from "../../../context/PanelContext";
import useDelete from "../../../hooks/useDelete";
import Button from "../atoms/Button";

const DeleteButton: React.FunctionComponent = () => {
  const { setOpen } = useContext(PanelContext);
  const { contact } = useContext(ContactContext);
  const { deleteItem } = useDelete();

  const deleteAction = () => {
    deleteItem(contact.id);
    setOpen(false);
  };

  return (
    <>
      <Button title="Delete" action={deleteAction} />
    </>
  );
};

export default DeleteButton;
