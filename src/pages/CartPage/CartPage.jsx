import { Timestamp } from "firebase/firestore/lite";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FoodTile from "../../components/FoodTile";
import NavBar from "../../components/NavBar";
import { CartState } from "../../Contexts/Context";
import { addOrder } from "../../service/service";
// import { addOrder } from "../../service/service";
import "../../style.css";

const CartPage = () => {
  let name, num;
  const nav = useNavigate();
  let addCart = {};
  const {
    state: { cart },
  } = CartState();
  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div>
      <NavBar title="Cart" isCart="true" />
      {cart.length === 0 || cart.length < 0 ? (
        <div
          className="text-center"
          onClick={() => {
            nav("/");
          }}
        >
          <h1 className="mt-5">Cart Is Empty</h1>
          <div className="bg-color-dark text-center text-white shadow-lg rounded mt-4 mx-5 py-3">
            <h1>Order Food</h1>
          </div>
        </div>
      ) : (
        <div>
          {cart.map(({ id, title, desc, price, img, Bestseller }) => {
            addCart = {
              ...addCart,
              [title]: {
                price: price,
                qty: 1,
              },
            };
            return (
              <FoodTile
                key={id}
                id={id}
                title={title}
                desc={desc}
                price={price}
                img={img}
                isBestseller={Bestseller}
              />
            );
          })}
          <div className="card m-2 mt-5">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h3 className="text-318">Total Items</h3>
                </div>
                <div className="col-2"></div>
                <div className="col-2 ">{cart.length}</div>
              </div>
              <div className="border-bottom mb-2"></div>
              <div className="row">
                <div className="col-8">
                  <h3 className="text-318">Total Amount</h3>
                </div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div className="text-318">{totalAmount}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                onChange={(event) => {
                  name = event.target.value;
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Number" className="form-label">
                WhatsApp Number
              </label>
              <input
                type="number"
                className="form-control"
                id="Number"
                onChange={(event) => {
                  num = event.target.value;
                }}
              />
              <div id="security-note" className="form-text">
                We'll never share your details with anyone else.
              </div>
            </div>
            <div className="text-center pb-5">
              <button
                className="btn bg-color-dark text-white"
                onClick={() => {
                  if (name && num) {
                    addOrder(
                      name,
                      num,
                      addCart,
                      {
                        msg: "Your order is received",
                        state: "received",
                      },
                      Timestamp.now()
                    ).then((res) => {
                      if (res) {
                        nav(`/order/${res}`);
                        console.log(res);
                      }
                    });
                  } else {
                    alert("Please enter name and number");
                  }

                  // alert(`${name} ${num}`);
                  // addOrder(name, num, {});
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
