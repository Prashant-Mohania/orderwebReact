import React from "react";
import PropType from "prop-types";
import { CartState } from "../Contexts/Context";

const FoodTile = ({ id, title, desc, price, img, isBestseller, isAdmin }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="mx-2 mt-3 bg-color-light p-3 rounded">
      <div className="row">
        <div className="col-8">
          {isBestseller ? (
            <div className="bg-color-dark rounded text-center">
              <h1 className="text-410 text-white p-1">Bestseller</h1>
            </div>
          ) : (
            <div></div>
          )}
          <h1 className="text-518">{title}</h1>
          <p className="text-312">{desc}</p>
          <h2 className="text-318">₹ {price}</h2>
        </div>
        <div className="col-4 text-center">
          <img src={img} alt="onion pizza" style={{ width: "80px" }} />
          {!isAdmin ? <div>
            <div>
            {cart.some((item) => item.id === id) ? (
              <button
                className="bg-color-dark text-white rounded mt-4 w-auto px-3 py-1"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: id,
                      title: title,
                      desc: desc,
                      price: price,
                      img: img,
                      isBestseller: isBestseller,
                    },
                  });
                }}
              >
                Remove
              </button>
            ) : (
              <button
                className="bg-color-dark text-white rounded mt-4 w-auto px-3 py-1"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: id,
                      title: title,
                      desc: desc,
                      price: price,
                      img: img,
                      isBestseller: isBestseller,
                    },
                  });
                }}
              >
                Add
              </button>
            )}
          </div>
          </div> : <div></div>}
         
        </div>
      </div>
    </div>
  );
};

FoodTile.protoTypes = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired,
  price: PropType.string.isRequired,
  img: PropType.string.isRequired,
  isBestseller: PropType.bool,
  isAdmin: PropType.bool,
};

FoodTile.defaultProps = {
  isBestseller: false,
  isAdmin: false,
};

export default FoodTile;
