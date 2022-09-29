import React, {useContext} from "react";
import { PanelContext } from "../../../context/PanelContext";
import Button from "../atoms/Button";

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
