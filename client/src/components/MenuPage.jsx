import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MenuTabs from "./MenuTabs";
import MenuItems from "./MenuItems";

function MenuPage() {
  const { menuName } = useParams();
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMenus = async (retryCount = 3) => {
      try {
        setLoading(true); 

        const response = await axios.get("https://deepnetassignment.onrender.com/api/menus");
        const menusData = response.data || [];

        setMenus(menusData);

        let selected = menusData.find((menu) => menu.name === menuName);

        if (!selected && menusData.length > 0) {
          selected = menusData[0];
          navigate(`/menu/${selected.name}`, { replace: true });
        }

        setSelectedMenu(selected || null);
      } catch (error) {
        console.error("Error fetching menus:", error);

        // Retry API call in case of failure (cold start handling)
        if (retryCount > 0) {
          setTimeout(() => fetchMenus(retryCount - 1), 3000);
        }
      } finally {
        setLoading(false); // Stop loading once API call completes
      }
    };

    fetchMenus();
  }, [menuName, navigate]);

  return (
    <>
      <div
        className="container-fluid py-5 text-white"
        style={{
          backgroundImage: "url('/imgs/Rectangle 103.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="text-center display-4 fw-bold">MENU</h1>
          <p className="text-center">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>

          <div
            className="py-2 my-3 rounded d-flex justify-content-center align-items-center mt-5"
            style={{
              backgroundImage: "url('/imgs/Rectangle 107.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "50px",
            }}
          >
            {menus.length > 0 && (
              <MenuTabs
                selected={selectedMenu?.name || ""}
                setSelected={(name) => {
                  const newSelected = menus.find((menu) => menu.name === name);
                  setSelectedMenu(newSelected);
                  navigate(`/menu/${name}`);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Show loading text if data is still being fetched */}
      {loading ? (
        <p className="text-center text-white mt-4">Loading menu...</p>
      ) : selectedMenu ? (
        <div className="bg-dark p-4 rounded mb-5" style={{ height: "672px" }}>
          <MenuItems items={selectedMenu.items || []} selectedMenu={selectedMenu} />
        </div>
      ) : (
        <p className="text-center text-white mt-4">No menu available.</p>
      )}
    </>
  );
}

export default MenuPage;
