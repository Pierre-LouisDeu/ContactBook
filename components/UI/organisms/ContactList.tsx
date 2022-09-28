import React from "react";
import ContactCard from "../molecules/ContactCard";

type ContactListProps = Array<{ name: string, email: string, birthday: string}>

const ContactList: React.FunctionComponent<ContactListProps> = ({contacts} : Array<ContactListProps>) => {
  return (
    <>
      <div className="mt-2">
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
