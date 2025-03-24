import { useNavigate } from "react-router-dom";

function MenuItems({ items, selectedMenu }) {
  const navigate = useNavigate();

  const handleAddMenuItem = () => {
    console.log("Hello", selectedMenu._id);
    navigate(`/createmenuitems/${selectedMenu._id}`);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center my-5 px-3"
      style={{
        backgroundImage: "url('/imgs/Frame.png'), url('/imgs/Frame (1).png')",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto 100%",
      }}
    >
      <div
        className="bg-dark text-white p-4 rounded w-100"
        style={{ maxWidth: "900px", minHeight: "500px", border: "1px solid white" }}
      >
        <h2 className="h4 fw-bold mb-4 text-center">{selectedMenu.name}</h2>
        {items.length > 0 ? (
          <div className="row g-3">
            {items.map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border-bottom border-secondary py-2">
                  <h3 className="h5 fw-semibold">{item.name}.........$<span className="fw-bold">{item.price}</span></h3>
                  <p>
                    {item.description}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No items available</p>
        )}

        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-success w-50 w-md-auto"
            style={{ height: "50px", minWidth: "120px" }}
            onClick={handleAddMenuItem}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
