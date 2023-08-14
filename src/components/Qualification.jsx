import React from "react";

const Qualification = ({ qualification = "No qualification given" }) => {
  return (
    <div className="p-4">
      <p className="mb-20 ml-10 mr-10">{qualification}</p>
    </div>
  );
};

export default Qualification;
