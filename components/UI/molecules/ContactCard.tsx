import React from "react";

type ContactProps = {
  name: string;
  email: string;
  birthday: string;
};

  const ContactCard: React.FunctionComponent<ContactProps> = ({ name, email, birthday }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center ">{name}</h2>
          <p>{email}</p>
          <p>{birthday}</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
