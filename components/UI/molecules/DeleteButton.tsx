import React, { useContext } from "react";
import Button from "../atoms/Button";
import { ContactContext } from "../../../context/ContactContext";

const DeleteButton: React.FunctionComponent = () => {
  const { contact } = useContext(ContactContext);

  async function deleteItem() {
    const id = contact.id;
    await fetch(`http://localhost:8000/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => console.log("delete contact ", contact.id))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Button title="Delete" action={deleteItem} />
    </>
  );
};

export default DeleteButton;
