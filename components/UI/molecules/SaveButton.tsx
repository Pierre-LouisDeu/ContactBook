import React, {useContext} from "react";
import { ContactContext } from "../../../context/ContactContext";
import Button from "../atoms/Button";
import usePatch from "../../../hooks/usePatch";

const SaveButton: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);
  const { patchContact } = usePatch();

  const saveAction = () => {
    patchContact(contact)
  };

  return (
    <>
      <Button title="Save" action={saveAction}/>
    </>
  );
};

export default SaveButton;
