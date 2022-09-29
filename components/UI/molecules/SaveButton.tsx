import React, {useContext} from "react";
import Button from "../atoms/Button";
import { PanelContext } from "../../../context/PanelContext";

const SaveButton: React.FunctionComponent = () => {
  const { setOpen } = useContext(PanelContext);

  const saveAction = () => {
    setOpen(false);
  };

  return (
    <>
      <Button title="Save" action={saveAction}/>
    </>
  );
};

export default SaveButton;
