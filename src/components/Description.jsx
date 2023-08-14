import React from "react";

const Description = ({ description = "No description given" }) => {
  return (
    <div className="p-4">
      <p className="ml-10 mr-10">{description}</p>
    </div>
  );
};

export default Description;
