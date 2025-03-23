import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-white text-center px-3"
      style={{
        backgroundImage: "url('/imgs/Rectangle 103.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="fw-bold mb-3">Welcome to the Menu Manager</h1>
      <p className="mb-4" style={{ maxWidth: "600px" }}>
        Manage your menus easily. Create new menus, add items, and keep everything organized.
      </p>

      <div className="d-flex flex-column flex-md-row gap-3 w-100 justify-content-center">
        <button className="btn btn-primary px-4 py-2 w-100 w-md-auto" onClick={() => navigate("/menu")}>
          View Menus
        </button>
        <button className="btn btn-success px-4 py-2 w-100 w-md-auto" onClick={() => navigate("/createmenu")}>
          Create Menu
        </button>
      </div>
    </div>
  );
}

export default Home;
