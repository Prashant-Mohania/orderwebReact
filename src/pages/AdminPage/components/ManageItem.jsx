import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FoodTile from "../../../components/FoodTile";
import NavBar from "../../../components/NavBar";
import {
  addItem,
  deleteItem,
  getCategories,
  getItems,
  updateItem,
} from "../../../service/service";

function ManageItem() {
  var [update, setUpdate] = useState(false);
  const [info, setInfo] = useState({
    bestseller: false,
  });
  const [category, setcategory] = useState(Array(0));
  const [foodItems, setFoodItems] = useState(Array(0));

  const [loadState, setLoadState] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setLoadState(true);
    getItems().then((res) => {
      setFoodItems(res);
      setLoadState(false);
    });
    getCategories().then((res) => {
      setcategory((data) => res);
      setLoadState(false);
    });
  }, []);

  if (loadState) return <div className="text-center">Loading</div>;

  return (
    <>
      <NavBar title="Add Item" isAdmin={false} isCart={true} />
      <div className="m-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={info["title"]}
            onChange={(event) => {
              setInfo({ ...info, title: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={info["desc"]}
            onChange={(event) => {
              setInfo({ ...info, desc: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={info["price"]}
            onChange={(event) => {
              setInfo({ ...info, price: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            value={info["img"]}
            onChange={(event) => {
              setInfo({ ...info, img: event.target.value });
            }}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            aria-label="category"
            id="category"
            value={info["category"]}
            onChange={(event) => {
              setInfo({ ...info, category: event.target.value });
            }}
          >
            <option>Select Category</option>
            {category.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Bestseller
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            value={info["bestseller"]}
            aria-checked={info["bestseller"]}
            onChange={(event) => {
              setInfo({ ...info, bestseller: !info["bestseller"] });
            }}
          />
        </div>
        <div className="text-center mt-4 pb-5">
          <button
            type="submit"
            className="btn bg-color-dark text-white"
            onClick={() => {
              if (
                info["title"] &&
                info["desc"] &&
                info["price"] &&
                info["img"] &&
                info["category"]
              ) {
                setLoadState(true);
                if (update) {
                  updateItem(
                    info["id"],
                    info["title"],
                    info["desc"],
                    info["price"],
                    info["category"],
                    info["img"],
                    info["bestseller"]
                  ).then((res) => {
                    console.log(res, "update");
                    if (res) {
                      setLoadState(false);
                      res === true ? nav(-1) : alert("Error");
                    }
                  });
                } else {
                  addItem(
                    info["title"],
                    info["desc"],
                    info["price"],
                    info["category"],
                    info["img"],
                    info["bestseller"]
                  ).then((res) => {
                    if (res) {
                      console.log(res, "add");
                      setLoadState(false);
                      res === true ? nav(-1) : alert("Error");
                    }
                  });
                }

                setLoadState(false);
              } else {
                alert("Please fill all the fields");
                setLoadState(false);
              }
            }}
          >
            Submit
          </button>
        </div>
        {foodItems.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                setInfo(item);
                setUpdate(true);
                console.log(update);
              }}
              onDoubleClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this item?")
                ) {
                  deleteItem(item.id).then((res) => {
                    window.location.reload();
                  });
                } else {
                  console.log("not deleted");
                }
              }}
            >
              <FoodTile
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={"./images/pizza.jpg"}
                isBestseller={item.bestseller}
                isAdmin={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ManageItem;
