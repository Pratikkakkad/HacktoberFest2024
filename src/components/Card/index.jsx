import React from "react";

export const Card = ({
  data: {
    name,
    imageUrl,
    monthly_reward_points,
    annual_reward_points,
    reward_value,
  },
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Monthly: {monthly_reward_points}
        </p>
        <p className="text-gray-700 text-base">
          Annual: {annual_reward_points}
        </p>
        <p className="text-gray-700 text-base">Value: {reward_value}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};
