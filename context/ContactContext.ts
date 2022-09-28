import React, { useContext } from "react";

type ContactContextType = {
  id: number;
  name: string;
  email: string;
  birthday: string;
  information: string;
};

export const ContactContext = React.createContext<any>(null);
