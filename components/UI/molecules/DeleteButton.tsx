import React, { useContext } from "react";
import Button from "../atoms/Button";
import { ReloadContext } from "../../../context/ReloadContext";
import { ContactContext } from "../../../context/ContactContext";
import useDelete from "../../../hooks/useDelete";

const DeleteButton: React.FunctionComponent = () => {
  const { setReload } = useContext(ReloadContext);
  const { contact } = useContext(ContactContext);
  const { deleteItem } = useDelete();

  return (
    <>
      <Button title="Delete" action={() => deleteItem(contact.id)} />
    </>
  );
};

export default DeleteButton;
