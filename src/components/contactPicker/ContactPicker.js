import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange}>
      <option value=''/>
      {props.contacts.map((contact) => <option value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
