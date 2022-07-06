import React from "react";

const CategoryItem = ({ img, title }) => {
  return (
    <>
      <div className="card bg-transparent border-0">
        <img className="mx-auto" src={img} alt="" style={{ height: "120px", width: "120px" }} />
        <div className="card-body">
          <div className="card-title text-720 text-center">{title}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
