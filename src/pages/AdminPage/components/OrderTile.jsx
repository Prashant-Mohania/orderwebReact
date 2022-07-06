import React from "react";
import { updateStatus } from "../../../service/service";

function OrderTile({ name, id, cart, date, status }) {
  const cartMap = Object.entries(cart);
  let total = 0;

  return (
    <>
      <div className="card mx-3 mb-2 text-center">
        <div className="card-body rounded">
          <div className="text-620">{name}</div>
          <p className="text-color-dark text-312">{id}</p>
          <div className="mb-3">
            {cartMap.map((ele) => {
              total = total + ele[1]["price"] * ele[1]["qty"];
              return (
                <>
                  <div key={ele.id} className="text-414">{`${ele[0]} = ₹ ${ele[1]["price"]} x ${ele[1]["qty"]}`}</div>
                </>
              );
            })}
            <div className="text-720 mt-3">{`Total = ₹ ${total}`}</div>
          </div>
          {status["state"] === "received" ? (
            <div className="row">
              <div className="col-6">
                <button
                  className="p-2 bg-color text-620"
                  onClick={() => {
                    updateStatus(
                      "Your order is declined",
                      "delivered",
                      id
                    ).then((res) => {
                      if (res) {
                        window.location.reload();
                      }
                    });
                  }}
                >
                  Decline
                </button>
              </div>
              <div className="col-6">
                <button
                  className="p-2 bg-color-dark text-620 text-white rounded"
                  onClick={() => {
                    updateStatus("Your order is accepted", "accepted", id).then(
                      (res) => {
                        if (res) {
                          window.location.reload();
                        }
                      }
                    );
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          ) : status["state"] === "accepted" ? (
            <button
              className="p-2 bg-color-dark text-620 text-white rounded"
              onClick={() => {
                updateStatus("Your order is prepairing", "prepairing", id).then(
                  (res) => {
                    if (res) {
                      window.location.reload();
                    }
                  }
                );
              }}
            >
              set prepairing
            </button>
          ) : status["state"] === "prepairing" ? (
            <button
              className="p-2 bg-color-dark text-620 text-white rounded"
              onClick={() => {
                updateStatus("Your order is ready", "ready", id).then((res) => {
                  if (res) {
                    window.location.reload();
                  }
                });
              }}
            >
              set ready
            </button>
          ) : status["state"] === "ready" ? (
            <button
              className="p-2 bg-color-dark text-620 text-white rounded"
              onClick={() => {
                updateStatus("Your order is completed", "completed", id).then(
                  (res) => {
                    if (res) {
                      window.location.reload();
                    }
                  }
                );
              }}
            >
              set complete
            </button>
          ) : status["state"] === "completed" ? (
            <button className="p-2 bg-success text-620 text-white rounded">
              Completed
            </button>
          ) : (
            <button className="p-2 bg-danger text-620 text-white rounded">
              Canceled
            </button>
          )}
          <div className="text-318 mt-3">{Date(date)}</div>
        </div>
      </div>
    </>
  );
}

export default OrderTile;
