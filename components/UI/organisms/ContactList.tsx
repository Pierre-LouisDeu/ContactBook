import React from "react";
import ContactCard from "../molecules/ContactCard";

// type ContactListProps =  {
//   contacts : Array<{ name: string, email: string, birthday: string}>;
// };

const contacts = [
  { id: 1, name: "Bob", email: "bob@email.com", birthday: "01/01/2021" },
  { id: 2, name: "Alan", email: "alan@email.com", birthday: "01/01/2021" },
  {
    id: 3,
    name: "Juliette",
    email: "juliette@email.com",
    birthday: "09/09/2021",
  },
];

const ContactList: React.FunctionComponent = () => {
  return (
    <>
      <div className="mt-2 w-full">
        {contacts.map(
          (contact: { id: number, name: string; email: string; birthday: string }) => (
            <div className="py-2">
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                birthday={contact.birthday}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ContactList;
