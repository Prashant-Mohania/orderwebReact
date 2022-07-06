import React from "react";

import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="mx-4 mt-4">
      <div
        className="input-group mb-3 bg-color-light"
        style={{ borderRadius: "10px" }}
      >
        <span
          className="input-group-text bg-transparent border-0"
          id="basic-addon1"
        >
          <BiSearch className="fs-3 text-color-primary"/>
        </span>
        <input
          type="text"
          className="form-control bg-transparent border-0"
          placeholder="Search ...."
          aria-label="Search ...."
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default SearchBox;
