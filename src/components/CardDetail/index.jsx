import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const params = useParams();

  console.log("params", params)
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/400x200" // Replace with actual card banner image
        alt={card.name}
        className="w-full h-48 object-cover"
      />

      {/* Card Details */}
      <div className="p-6">
        {/* Card Name */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{card.name}</h2>

        {/* Annual Fee & Renewal Waiver */}
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Annual Fee:</strong> ₹{card.annual_fee}
          </p>
          <p className="text-gray-600">
            <strong>Renewal Waiver:</strong> {card.renewal_waiver}
          </p>
        </div>

        {/* Fuel Benefits */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Fuel Benefits</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Reward Rate: {card.fuel_benefits.reward_rate}</li>
            <li>
              Monthly Reward Points: {card.fuel_benefits.monthly_reward_points}
            </li>
            <li>
              Annual Reward Points: {card.fuel_benefits.annual_reward_points}
            </li>
            <li>Reward Value (INR): ₹{card.fuel_benefits.reward_value_inr}</li>
            <li>
              Fuel Surcharge Waiver: {card.fuel_benefits.fuel_surcharge_waiver}
            </li>
          </ul>
        </div>

        {/* Other Benefits */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Other Benefits
          </h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Lounge Access: {card.other_benefits.lounge_access}</li>
            <li>
              Additional Rewards: {card.other_benefits.additional_rewards}
            </li>
          </ul>
        </div>

        {/* Important Fact */}
        <div className="mt-4">
          <p className="text-gray-800 font-semibold">
            <strong>Important Fact:</strong> {card.important_fact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
