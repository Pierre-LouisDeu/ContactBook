import React from "react";
import ContactCard from "../molecules/ContactCard";

// type ContactListProps =  {
//   contacts : Array<{ name: string, email: string, birthday: string}>;
// };

const ContactList : React.FunctionComponent = () => {

  const contacts = [
    { name: "Bob", email: "bob@email.com", birthday: "01/01/2021" },
    { name: "Alan", email: "alan@email.com", birthday: "01/01/2021" },
    { name: "Juliette", email: "juliette@email.com", birthday: "09/09/2021" },
  ];
  
  return (
    <>
      <div className="mt-2 w-full">
        {contacts.map((contact : { name: string, email: string, birthday: string }) => (
          <div className="py-2">
            <ContactCard
              name={contact.name}
              email={contact.email}
              birthday={contact.birthday}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
