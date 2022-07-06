import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import OrderTile from "./OrderTile";
import { getOrders } from "../../../service/service";

function Orders() {
  const [data, setData] = useState([]);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setLoadState(true);
    getOrders().then((res) => {
      setData((data) => res);
      setLoadState(false);
    });
    // const d = new Date();
    // console.log(d.getDate());
  }, []);

  if (loadState)
    return <div className="text-center text-318 mb-3">Loading...</div>;

  return (
    <>
      <NavBar title="Today Orders" isAdmin={false} isCart={true} />
      {/* <div className="text-center text-720 mb-3">Today's Order</div>, */}
      {data.length > 0 ? (
        <div>
          {data.map((order) => {
            return (
              <OrderTile
                key={order.id}
                name={order.name}
                id={order.id}
                cart={order.cart}
                date={order.date}
                status={order.status}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center text-724">No Order yet</div>
      )}
    </>
  );
}

export default Orders;
