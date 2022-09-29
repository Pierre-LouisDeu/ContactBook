import React, {useContext} from "react";
import Button from "../atoms/Button";
import { PanelContext } from "../../../context/PanelContext";

const NewButton: React.FunctionComponent = () => {
  const { setOpen } = useContext(PanelContext);

  const newAction = () => {
    setOpen(true);
  }

  return (
    <>
      <Button title="New" action={newAction} />
    </>
  );
};

export default NewButton;
