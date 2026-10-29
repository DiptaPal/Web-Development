"use client"

import { createContext, useState } from "react";

export const ContactsContext = createContext(null);

const ContactsProvider = ({ children }) => {


    const [contacts, setContacts] = useState([]);

    const value = {
        contacts,
        setContacts
    }

    return (
        <ContactsContext.Provider value={value}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsProvider;