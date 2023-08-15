import React from "react";

const Details = ({
  title = "No title given",
  workplace = "No workplace given",
  date = "No date given",
  position = "Full time",
  hours = "Unspecified",
  location = "No location given",
}) => {
  return (
    <div className="p-4 border-gray-300">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 mb-4">{workplace}</p>
      <p className="text-gray-500">📅 Posted on {date}</p>
      <p className="text-gray-500">📍 {location}</p>
      <p className="text-gray-500">💼 {position}</p>
      <p className="text-gray-500">🕔 {hours}</p>
    </div>
  );
};

export default Details;
