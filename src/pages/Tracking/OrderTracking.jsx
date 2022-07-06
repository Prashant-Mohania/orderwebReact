import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { getOrderStatus } from "../../service/service";

function OrderTracking() {
  let orderId;
  const [data, setData] = useState([]);
  const [loadState, setLoadState] = useState(false);

  function getStatus() {
    setLoadState(true);
    getOrderStatus(orderId).then((res) => {
      console.log(res);
      setData((data) => res);
      setLoadState(false);
    });
  }

  if (loadState)
    return <div className="text-center text-318 mb-3">Loading...</div>;

  return (
    <>
      <NavBar title={"Order Tracking"} />
      <div className="text-center mt-5">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control text-center w-75 mx-auto"
          id="Name"
          placeholder="Enter Order Id"
          onChange={(event) => {
            orderId = event.target.value;
          }}
        />
        <button
          className="btn bg-color-dark text-white my-3"
          onClick={() => {
            if (orderId) getStatus();
          }}
        >
          Search
        </button>
        <div className="card mx-5 my-5 rounded shadow-lg">
          <div className="card-body">
            <h1 className="text-center">{data.state}</h1>
            <p className="text-center">{data.msg}</p>
            <p className="text-center text-314">{data.id}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;
