"use client";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";

const useContacts = () => {
    const context = useContext(ContactsContext);
    if (context === null) {
        throw new Error(
            "useFriends must be used within FriendsProvider"
        );
    }

  return context;
}

export default useContacts;