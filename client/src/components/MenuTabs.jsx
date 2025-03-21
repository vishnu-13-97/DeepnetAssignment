import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MenuTabs({ selected, setSelected }) {
  const [menus, setMenus] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://deepnetassignment.onrender.com/api/menus");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenus();
  }, []);

  const handleMenuClick = (menu) => {
    setSelected(menu.name);
    navigate(`/menu/${menu.name}`);
  };

  const handleAddMenu = () => {
    navigate("/createmenu");
  };

  const handleSeeMore = () => {
    setPage((prev) => (prev + 1) % Math.ceil(menus.length / itemsPerPage));
  };

  // Get the current page menus
  const displayedMenus = menus.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
      {displayedMenus.map((menu) => (
        <button
          key={menu._id}
          className={`btn ${selected === menu.name ? "btn-primary" : "btn-secondary"} flex-grow-1`}
          style={{ height: "50px", minWidth: "120px" }}
          onClick={() => handleMenuClick(menu)}
        >
          {menu.name}
        </button>
      ))}

      <button className="btn btn-success flex-grow-1" style={{ height: "50px", minWidth: "120px" }} onClick={handleAddMenu}>
        Add Menu
      </button>

      {menus.length > itemsPerPage && (
        <button className="btn btn-info flex-grow-1" style={{ height: "50px", minWidth: "120px" }} onClick={handleSeeMore}>
          See More
        </button>
      )}
    </div>
  );
}

export default MenuTabs;
