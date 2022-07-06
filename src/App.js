import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "./style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodPage from "./pages/FoodPage/FoodPage";
import CartPage from "./pages/CartPage/CartPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import Orders from "./pages/AdminPage/components/Orders.jsx";
import ManageCategory from "./pages/AdminPage/components/ManageCategory.jsx";
import ManageItem from "./pages/AdminPage/components/ManageItem.jsx";
import OrderTracking from "./pages/Tracking/OrderTracking.jsx";
import ConfirmOrder from "./pages/CartPage/components/ConfirmOrder.jsx";

function App() {
  return (
    <div className="default-width">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":category" element={<FoodPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="order/:orderID" element={<ConfirmOrder />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/adminPage">
            <Route path="" element={<AdminPage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="manageItem" element={<ManageItem />} />
            <Route path="manageCategory" element={<ManageCategory />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
