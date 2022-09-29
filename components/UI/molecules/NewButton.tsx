import React, {useContext} from "react";
import { ContactContext } from "../../../context/ContactContext";
import { PanelContext } from "../../../context/PanelContext";
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
