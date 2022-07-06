import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import { getCategories } from "../../../service/service";

const CategoryList = () => {
  const [data, setData] = useState(Array(0));

  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setLoadState(true);
    getCategories().then((res) => {
      setData((data) => res);
      setLoadState(false);
    });
  }, []);

  if (loadState) return <div className="text-center">Loading</div>;

  return (
    <div>
      {data.length > 0 ? (
        <div className="mx-4 mt-5">
          <div className="row row-cols-2">
            {data.map((val) => {
              return (
                <Link key={val.id} to={val.name}>
                  <CategoryItem img={val.img} title={val.name} />
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center">No Categories</div>
      )}
    </div>
  );
};

export default CategoryList;
