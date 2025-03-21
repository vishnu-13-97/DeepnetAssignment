import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMenu() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      await axios.post("https://deepnetassignment.onrender.com/api/menus", {
        name,
        description,
      },  { headers: { "Content-Type": "application/json" } });

      setMessage({ type: "success", text: "Menu created successfully!" });
      setName("");
      setDescription("");

      setTimeout(() => navigate("/menu"), 1500);
    } catch (error) {
      console.log(error);
      setMessage({ type: "error", text: "Failed to create menu. Try again." });
    }
  };

  const handleCancel = () => {
    navigate("/menu"); // Redirect to home or another desired page
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center my-5"
      style={{
        backgroundImage: "url('/imgs/Frame.png'), url('/imgs/Frame (1).png')",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto 100%",
      }}
    >
      <div
        className="bg-dark text-white p-4 rounded"
        style={{
          width: "80%",
          minHeight: "500px",
          border: "1px solid white",
        }}
      >
        <h2 className="h4 fw-bold mb-3 text-center">Create New Menu</h2>

        {message && (
          <div
            className={`alert ${
              message.type === "success" ? "alert-success" : "alert-danger"
            } text-center`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary flex-grow-1">Create Menu</button>
            <button type="button" className="btn btn-danger flex-grow-1" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMenu;
