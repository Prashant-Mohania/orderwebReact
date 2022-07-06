import React from "react";

const Greeting = () => {
  const hour = new Date().getHours();
  return (
    <div className="mx-4 mt-3">
      <h1 className="text-628 text-color-primary">
        {hour < 12 ? "Good Morning" : "Good Evening"}
      </h1>
      <p className="text-320 text-color-primary">What you want to eat?</p>
    </div>
  );
};

export default Greeting;
