import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./Logo.png";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("http://localhost:3000/products/");
      const Products = await response.json();
      const formattedProducts = Products.map((product) => ({
        id: Number(product.id),
        image: product.image,
        title: product.title,
        price: product.price,
        description: product.description,
        list_anh: product.list_anh,
        category: product.category,
      }));
      return formattedProducts;
    } catch (error) {
      console.error("Lỗi khi fetch products:", error);
      return [];
    }
  }

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  const handleSearchClick = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredResults(results);
      setShowOverlay(results.length > 0);
    }
  };

  const handleSelectProduct = (id) => {
    navigate(`/product-detail/${id}`);
    setShowOverlay(false);
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); // Đăng xuất
      alert("Log out successfully");
      navigate("/"); // Có thể chuyển về trang chủ
    } else {
      navigate("/Login"); // Chuyển đến trang đăng nhập
    }
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          padding: "10px 16px",
          background: "#555",
          color: "#f1f1f1",
          zIndex: 100,
        }}
        className="bg-dark d-flex"
      >
        <div className="container shadow bg-dark text-white">
          <div className="row w-100">
            <div className="logo_container col-lg-1 col-xl-1 col-md-2 col-sm-2 p-3">
              <NavLink className="nav-link" to="/">
                <img src={logo} className="logo_image" alt="Logo" />
              </NavLink>
            </div>

            <div className="Search_box col-lg-6 col-xl-6 col-md-8 col-sm-8 d-flex container-fluid p-2">
              <input
                className="Search_bar col-lg-10 col-xl-10 col-md-8 col-sm-8 p-2"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="Search_button col-lg-2 col-xl-2 col-md-4 col-sm-4 p-2"
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>

            <div className="navbar_container col-lg-5 col-xl-5 col-md-2 col-sm-2 d-flex flex-row-reverse">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          <b>Home</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                          <b>About</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/product-category">
                          <b>Services</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                          <b>Contact</b>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link bg-transparent border-0 ${
                            isLoggedIn ? "text-danger" : ""
                          }`}
                          onClick={handleAuthClick}
                        >
                          <b>{isLoggedIn ? "Logout" : "Login"}</b>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {showOverlay && (
        <div className="search-overlay" onClick={() => setShowOverlay(false)}>
          <div
            className="search-results-container"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="list-group">
              {filteredResults.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex align-items-center"
                  onClick={() => handleSelectProduct(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="suggestion-image me-2"
                  />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
