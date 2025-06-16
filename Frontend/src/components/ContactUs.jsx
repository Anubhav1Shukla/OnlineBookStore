import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "80px auto",
    padding: "60px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ec4899",
    color: "white", // Tailwind's text-pink-500 equivalent
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
            required
          ></textarea>

          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
