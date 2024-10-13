import React from "react";
import { useNavigate } from "react-router-dom";
import { createSlug } from "../../utils/utils";

export const Card = ({
  data: {
    name,
    imageUrl,
    monthly_reward_points,
    annual_reward_points,
    reward_value,
  },
}) => {
  const navigate = useNavigate();

  const handleCardDetail = () => {
    navigate(`/card/${createSlug(name)}`);
  };

  return (
    <div className="card flex flex-col justify-between h-full p-4 bg-white shadow-md rounded-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Monthly: {monthly_reward_points}
        </p>
        <p className="text-gray-700 text-base">
          Annual: {annual_reward_points}
        </p>
        <p className="text-gray-700 text-base">Value: {reward_value}</p>
      </div>
      <div className="pt-4">
        <button
          className="bg-brand-red hover:bg-brand-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCardDetail}
        >
          View Details
        </button>
      </div>
    </div>
  );
};
