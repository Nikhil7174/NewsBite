import React from "react";
import loading from "./loading-3.gif";

const Spinner = () => {
  return (
    <div className=" flex text-center justify-center">
      <img src={loading} alt="loading" className="w-20 text-center" />
    </div>
  );
};

export default Spinner;
