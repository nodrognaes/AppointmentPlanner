import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input 
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        required
      />
      <label for="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        pattern="(^[2-9]\d{2}-\d{3}-\d{4}$)"
        onChange={(e) => {
          setPhone(e.target.value)
        }}
        required 
      />
      <label for="email">Email Address:</label>
      <input 
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        required
      />
      <input type="submit" />
    </form>
  );
};
