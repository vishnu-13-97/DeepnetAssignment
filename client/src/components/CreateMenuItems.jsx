import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateMenuItem() {
  const { menuId } = useParams();
  const [menu, setMenu] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`https://deepnetassignment.onrender.com/api/menus/${menuId}`);
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (menuId) fetchMenu();
  }, [menuId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
       await axios.post(`https://deepnetassignment.onrender.com/api/menus/${menuId}/items`, {
        name,
        description,
        price,
      });

      setMessage({ type: "success", text: "Menu item added successfully!" });

      setName("");
      setDescription("");
      setPrice("");

      setTimeout(() => navigate(`/menu/${menuId}`), 1500);
    } catch (error) {
      console.error("Error adding menu item:", error);
      setMessage({ type: "error", text: "Failed to add menu item. Try again." });
    }
  };

  const handleCancel = () => {
    navigate(`/menu/${menuId}`);
  };

  return (
    <div className="container my-5">
      <div className="bg-dark text-white p-4 rounded">
        <h2 className="h4 fw-bold text-center">Add Menu Item</h2>

        {menu && <p className="text-center">Adding item to: <strong>{menu.name}</strong></p>}

        {message && (
          <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} text-center`}>
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

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Button Row */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Add Item</button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMenuItem;
