import React, { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";
import Button from "../atoms/Button";
import usePatch from "../../../hooks/usePatch";
import usePost from "../../../hooks/usePost";

const SaveButton: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  const { patchContact } = usePatch();
  const { postContact } = usePost();

  const saveAction = () => {
    if (contact.id) {
      patchContact(contact);
    } else {
      postContact(contact);
    }
  };

  return (
    <>
      <Button title="Save" action={saveAction} />
    </>
  );
};

export default SaveButton;
