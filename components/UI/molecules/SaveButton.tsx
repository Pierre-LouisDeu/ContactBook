import React, { useState, useEffect, useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";
import Button from "../atoms/Button";
import usePatch from "../../../hooks/usePatch";
import usePost from "../../../hooks/usePost";
import Banner from "./Banner";

const SaveButton: React.FunctionComponent = () => {
  const { contact, setContact } = useContext(ContactContext);
  const { patchContact } = usePatch();
  const { postContact } = usePost();
  const [missingData, setMissingData] = useState(false);

  useEffect(() => {
    if (missingData === true) {
      setTimeout(() => {
        setMissingData(false);
      }, 3000);
    }
  }, [missingData]);

  const saveAction = () => {
    if (contact.id && contact.firstName && contact.email && contact.birthday) {
      patchContact(contact);
    } else if (contact.firstName && contact.email && contact.birthday) {
      // setContact({ ...contact, id: 1});
      postContact(contact);
    } else {
      console.log("Missing data...");
      setMissingData(true);
    }
  };

  return (
    <>
      {missingData && <Banner title="Please complete the fields below" />}
      <Button title="Save" action={saveAction} />
    </>
  );
};

export default SaveButton;
