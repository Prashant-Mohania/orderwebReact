import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../../service/service";
import CategoryItem from "../../HomePage/components/CategoryItem";

function ManageCategory() {
  var [update, setUpdate] = useState(false);
  const [info, setInfo] = useState({});
  const [category, setcategory] = useState(Array(0));

  const nav = useNavigate();
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setLoadState(true);
    getCategories().then((res) => {
      setcategory((data) => res);
      setLoadState(false);
    });
  }, []);

  if (loadState)
    return <div className="text-center text-318 mb-3">Loading...</div>;

  return (
    <>
      <NavBar title="Add Category" isAdmin={false} isCart={true} />
      <div className="m-3">
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={info["name"]}
            onChange={(event) => {
              setInfo({ ...info, name: event.target.value });
              // catName = event.target.value;
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
              // CatImg = event.target.value;
            }}
          />
        </div>
        <div className="text-center pb-5">
          <button
            type="submit"
            className="btn bg-color-dark text-white"
            onClick={() => {
              if (info["name"] && info["img"]) {
                setLoadState(true);
                if (update) {
                  updateCategory(info["id"], info["name"], info["img"]).then(
                    (res) => {
                      if (res) {
                        setLoadState(false);
                        res ? nav(-1) : alert("Error");
                      }
                    }
                  );
                } else {
                  setLoadState(true);
                  addCategory(info["name"], info["img"]).then((res) => {
                    setLoadState(false);
                    res ? nav(-1) : alert("Error");
                  });
                }

                setLoadState(false);
              } else {
                alert("Please fill all the fields");
                setLoadState(false);
              }
            }}
          >
            Add Category
          </button>
        </div>
        {category.map((item) => {
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
                  deleteCategory(item.id).then((res) => {
                    if (res) window.location.reload();
                  });
                } else {
                  console.log("not deleted");
                }
              }}
            >
              <CategoryItem img={item.img} title={item.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ManageCategory;
