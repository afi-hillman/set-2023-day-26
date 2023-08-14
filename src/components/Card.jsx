import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  title = "No title given",
  workplace = "No workplace given",
  date = "No date given",
  state = "No state given",
  position = "Full time",
  stack = "No stack given",
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("id", id);
    navigate(`/job/${id}`);
  };

  return (
    <div
      className="border border-gray-400 w-[426.4px] h-[218px] p-4 rounded-md bg-white cursor-pointer hover:bg-gray-50"
      onClick={handleClick}
    >
      <h6 className="text-lg font-semibold">{title}</h6>
      <p className="text-gray-500 text-sm">{workplace}</p>
      <p className="text-gray-500 text-sm">📅 Posted on {date}</p>
      <p className="text-gray-500 text-sm">📍 {state}</p>
      <p className="text-gray-500 text-sm">💼 {position}</p>
      <div className="flex">
        {stack.map((item, index) => (
          <div
            key={index}
            className="mt-3 border border-gray-300 rounded-md py-1 px-1 text-gray-400 bg-gray-100 text-sm mr-2"
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-6">Added on {date}</p>
    </div>
  );
};
export default Card;
