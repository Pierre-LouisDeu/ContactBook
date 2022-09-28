import React from 'react';
import Button from '../atoms/Button';

const DeleteButton: React.FunctionComponent = () => {
  const deleteAction = () => {
    console.log("delete");
  };

  return (
    <>
      <Button title="Delete" action={deleteAction}/>
    </>
  )
}

export default DeleteButton
