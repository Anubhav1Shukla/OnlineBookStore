import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your feedback!");
    setFeedback("");
  };

  const outerStyle = {
    background: "linear-gradient(to right, #f8e1f4, #e3f0ff)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    maxWidth: "650px",
    margin: "50px auto",
    padding: "40px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 0.8s ease-in-out",
  };

  const headingStyle = {
    fontSize: "34px",
    color: "#d63384",
    textAlign: "center",
    marginBottom: "30px",
    borderBottom: "2px solid #ffcde3",
    paddingBottom: "10px",
  };

  const sectionStyle = {
    marginBottom: "30px",
    lineHeight: "1.8",
    fontSize: "17px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333",
  };

  const textareaStyle = {
    width: "100%",
    height: "100px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    resize: "vertical",
    fontSize: "16px",
    outlineColor: "#d63384",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "12px 20px",
    backgroundColor: "#d63384",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const ulStyle = {
    paddingLeft: "20px",
    lineHeight: "1.7",
  };

  return (
    <>
      <Navbar />
      <div style={outerStyle}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>📖 About Our Bookstore</h2>

          <div style={sectionStyle}>
            <p><strong>🏢 Company:</strong> Online BookStore Pvt. Ltd.</p>
            <p><strong>📍 Location:</strong> 42, Knowledge Street, Sector 10, New Delhi, India</p>
            <p><strong>🗓️ Established:</strong> March 2018</p>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>📚 What We Offer</h3>
            <p>Explore our wide range of book categories for every type of reader:</p>
            <ul style={ulStyle}>
              <li>✨ Fiction & Literature</li>
              <li>📘 Academic & School Books</li>
              <li>📈 Business & Economics</li>
              <li>🧒 Children & Young Adult</li>
              <li>🧘‍♀️ Health & Wellness</li>
              <li>💡 Self-Help & Motivation</li>
              <li>🌍 Travel & Geography</li>
              <li>🎨 Art & Photography</li>
              <li>📖 Biographies & Memoirs</li>
              <li>💻 Technology & Programming</li>
              <li>🏛️ History & Politics</li>
              <li>🔬 Science & Nature</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>📬 Contact Information</h3>
            <p><strong>Email:</strong> support@onlinebookstore.in</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>💬 Leave Us a Feedback</h3>
            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Your Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                style={textareaStyle}
                placeholder="We'd love to hear what you think..."
                required
              ></textarea>
              <button type="submit" style={buttonStyle}>
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
