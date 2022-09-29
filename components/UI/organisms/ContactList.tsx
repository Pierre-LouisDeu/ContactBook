import React, { useState, useEffect } from "react";
import ContactCard from "../molecules/ContactCard";
import useFetch from "../../../hooks/useFetch";
import Banner from "../molecules/Banner";

type ContactListProps = {
  url: string;
};

const ContactList: React.FunctionComponent<ContactListProps> = ({ url }) => {
  const [contacts, isPending, error] = useFetch(url);

  return (
    <>
      <div className="mt-2 w-full">
        {error && (
          <div>
            <Banner title={error} />
          </div>
        )}
        {isPending && <div>Loading...</div>}
        {contacts &&
          contacts.map(
            (contact: {
              id: number;
              firstName: string;
              lastName: string;
              email: string;
              birthday: string;
            }) => (
              <div className="py-4">
                <ContactCard
                  key={contact.id}
                  id={contact.id}
                  firstName={contact.firstName}
                  lastName={contact.lastName}
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
