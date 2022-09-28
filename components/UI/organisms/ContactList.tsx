import React from "react";
import ContactCard from "../molecules/ContactCard";

// type ContactListProps =  {
//   contacts : Array<{ name: string, email: string, birthday: string}>;
// };

const contacts = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Bob",
    email: "bob@email.com",
    birthday: "01/01/2021",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Alan",
    email: "alan@email.com",
    birthday: "01/01/2021",
  },
  {
    id: 3,
    firstName: "Juliette",
    lastName: "Z",
    email: "juliette@email.com",
    birthday: "09/09/2021",
  },
];

const ContactList: React.FunctionComponent<any> = ({ setOpen }) => {
  return (
    <>
      <div className="mt-2 w-full">
        {contacts.map(
          (contact: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            birthday: string;
          }) => (
            <div className="py-2">
              <ContactCard
                key={contact.id}
                id={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                email={contact.email}
                birthday={contact.birthday}
                setOpen={setOpen}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ContactList;
