import React, {useContext} from "react";
import { ContactContext } from "../../../contexts/ContactContext";
import { PanelContext } from "../../../contexts/PanelContext";
import Button from "../atoms/Button";

const NewButton: React.FunctionComponent = () => {
  const { setContact } = useContext(ContactContext);
  const { setOpen } = useContext(PanelContext);

  const newAction = () => {
    setContact({ firstName: "", lastName: "", email: "", birthday: "" });
    setOpen(true);
  }

  return (
    <>
      <Button title="New" action={newAction} />
    </>
  );
};

export default NewButton;
