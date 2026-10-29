"use client"
import ContactCard from "@/components/ContactCard";
import { useState } from "react";
import useContacts from "../hooks/useContacts";

const TimelinePage = () => {
  const { contacts } = useContacts();
  const [filterType, setFilterType] = useState("All");
  const handleFilter = (event) => {
    setFilterType(event.target.value);
  }

  const filteredContacts =
    filterType === "All"
      ? contacts
      : contacts.filter(
        (contact) =>
          contact.type.toLowerCase() === filterType.toLowerCase()
      );

  return (
    <div className="max-w-277.5 mx-auto py-10 px-8">
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-5xl text-[#1F2937] font-bold">Timeline</h1>
      <select
        // value={filterType}
        onChange={handleFilter}
        defaultValue="Filter timeline"
        className="select my-6 border-[#E9E9E9] select-ghost outline-0">
        <option disabled={true} className="text-[#64748B]">Filter timeline</option>
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      <div className="flex flex-col gap-6">
        {
          filteredContacts.map((contact, index) => <ContactCard key={index} contact={contact}></ContactCard>)
        }
      </div>
    </div>
  );
};

export default TimelinePage;