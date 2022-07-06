import React from "react";
import "../style.css";
import { CartState } from "../Contexts/Context";

import { Link, useNavigate } from "react-router-dom";

// icons
// import { BsSearch } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import PropTypes from "prop-types";

const NavBar = ({ title, isHome, isCart, isCheckout, isAdmin }) => {
  const navigate = useNavigate();
  const {
    state: { cart },
  } = CartState();
  return (
    <nav className="navbar bg-transparent">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          {isHome || isAdmin ? (
            <RiMenu2Fill style={{ fontSize: "30px", color: "#3E4462" }} />
          ) : (
            <button onClick={() => navigate(-1)}>
              <FiChevronLeft style={{ fontSize: "30px", color: "#3E4462" }} />
            </button>
          )}
          {/* <RiMenu2Fill style={{ fontSize: "30px", color: "#3E4462" }} /> */}
        </button>
        <button
          onClick={() => navigate(-1)}
          className="navbar-brand mx-auto text-color-primary text-724"
        >
          {title}
        </button>
        {isCart || isCheckout || isAdmin ? (
          <div></div>
        ) : (
          <button className="mx-4" onClick={() => navigate("/cart")}>
            <MdOutlineAddShoppingCart
              style={{ fontSize: "30px", color: "#3E4462" }}
            />
            {cart.length > 0 ? (
              <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            ) : null}
          </button>
        )}

        <div
          className="offcanvas offcanvas-start bg-color"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-color-primary"
              id="offcanvasNavbarLabel"
            >
              OrderWeb
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-color-primary">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tracking">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.protoTypes = {
  title: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
  isCart: PropTypes.bool,
  isCheckout: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

NavBar.defaultProps = {
  title: "OrderWeb",
  isHome: false,
  isCart: false,
  isCheckout: false,
  isAdmin: false,
};

export default NavBar;
