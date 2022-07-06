import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import FoodTile from "../../components/FoodTile";
import { useParams } from "react-router-dom";
import { getItems } from "../../service/service";

const FoodPage = () => {
  const params = useParams();
  const { category } = params;

  const [data, setData] = useState([]);

  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    setLoadState(true);
    getItems().then((res) => {
      setData(res);
      setLoadState(false);
    });
  }, []);

  const transformProducts = () => {
    let sortedProducts = data;

    if (category.toLocaleLowerCase() === "bestseller") {
      sortedProducts = sortedProducts.filter(
        (product) => product.bestseller === true
      );
    } else {
      sortedProducts = sortedProducts.filter(
        (product) =>
          product.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
    }
    return sortedProducts;
  };

  if (loadState)
    return (
      <div className="text-center">
        <NavBar />
        Loading
      </div>
    );

  return (
    <div className="default-width">
      <NavBar />
      <h1 className="text-424 mx-4 mt-3" id="bestseller">
        {category.toUpperCase()}
      </h1>
      {transformProducts().map(
        ({ id, title, desc, img, category, price, bestseller }) => (
          <FoodTile
            key={id}
            id={id}
            title={title}
            desc={desc}
            price={price}
            img={img}
            isBestseller={bestseller}
          />
        )
      )}
    </div>
  );
};

export default FoodPage;
