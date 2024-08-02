import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        Address: Greenwood International High School, No. 8-14, Chikkawadayarapura, Near Heggondahalli Gunjur Post, 
        Varthur - Sarjapur Rd, Varthur, Karnataka 560087
      </p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: admissions@greenwoodhigh.edu.in</p>
      {submitted ? (
        <p className="success-message" style={{ fontWeight: "bolder" }}>
          Thank you for contacting us. We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.510760130671!2d-122.41941568468184!3d37.774929779758056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c5d09e49%3A0x0!2zN1HCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjciVw!5e0!3m2!1sen!2sus!4v1647470734963!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="School Location"
      ></iframe>
    </div>
  );
};

export default ContactUs;
