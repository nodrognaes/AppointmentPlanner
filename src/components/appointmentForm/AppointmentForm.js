import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}> 
      <label for="title">Title:</label>
      <input 
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="date">Date:</label>
      <input 
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      />
      <label for="time">Time:</label>
      <input 
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label for="contacts">Contacts:</label>
      <input 
        contacts={contacts}
        id="contacts"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <ContactPicker 
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};
