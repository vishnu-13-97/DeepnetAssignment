import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white"
      style={{
        backgroundImage: "url('/imgs/Rectangle 103.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="fw-bold mb-4">Contact Us</h1>
      <p className="text-center mb-4" style={{ maxWidth: "600px" }}>
        Have questions or need assistance? Reach out to us using the form below.
      </p>

      <form className="w-50 p-4 bg-light text-dark rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary">Send Message</button>
          <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
