import { useState, useEffect, useContext } from "react";
import { ReloadContext } from "../context/ReloadContext";

const useDelete = () => {
  const { setReload } = useContext(ReloadContext);

  const deleteItem = async (id: number) => {
    await fetch(`http://localhost:8000/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setReload(true);
        console.log("Contact deletd");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { deleteItem };
};

export default useDelete;
