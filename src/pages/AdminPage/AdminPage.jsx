import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <NavBar title={"Admin Page"} isAdmin="true" />
      <div className="text-center text-318 mb-3">Dashboard</div>,
      <div className="row row-cols-2 px-2">
        <div className="card border-0 mb-3">
          <Link to={"orders"}>
            <div className="card-body rounded bg-color-dark">
              <div className="text-white text-720">20</div>
              <div className="text-white">Orders</div>
            </div>
          </Link>
        </div>
        <div className="card border-0 mb-3">
          <Link to={"manageItem"}>
            <div className="card-body rounded bg-color-dark">
              <div className="text-white text-720 text-center">
                Manage Items
              </div>
            </div>
          </Link>
        </div>
        <div className="card border-0 mb-3">
          <Link to="manageCategory">
            <div className="card-body rounded bg-color-dark">
              <div className="text-white text-720 text-center">
                Manage Category
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
