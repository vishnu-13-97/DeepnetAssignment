import { useNavigate } from "react-router-dom";

function MenuItems({ items ,selectedMenu }) {
const navigate = useNavigate();

  const handleAddMenuItem=()=>{
 console.log("Hello",selectedMenu._id);
 
 navigate(`/createmenuitems/${selectedMenu._id}`)


  }
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
        className="bg-dark text-white p-3 rounded"
        style={{ 
          width: "80%", 
          minHeight: "500px", 
          border: "1px solid white"
        }}
      >
        <h2 className="h4 fw-bold mb-3 text-center">{selectedMenu.name}</h2>
        {items.length > 0 ? (
  <div className="row">
    {items.map((item, index) => (
      <div
        key={index}
        className={`col-6 ${index % 2 === 0 || index % 2 !== 0 ? 'text-start' : 'text-end'}`}
      >
        <div className="border-bottom border-secondary py-2">
          <h3 className="h5 fw-semibold">{item.name}</h3>
          <p>{item.description}........  <span className="fw-bold">{item.price}</span></p>
        
        </div>
      </div>
    ))}

  </div>
) : (
  <p className="text-center">No items available</p>
)}



<button  className="btn btn-success flex-grow-1 mt-2"
        style={{ height: "50px", minWidth: "120px" }}
        onClick={handleAddMenuItem}>Add Item</button>

      </div>
      
    </div>
  );
}

export default MenuItems;
