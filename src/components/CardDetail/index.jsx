import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsData from "../../mock/DetailedCardData.json";
import Loader from "../Loader";

const CardDetails = () => {
  const params = useParams();
  const [card, setCard] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const filteredData = CardsData.cards.filter((item) => {
      item.name === "Indian Oil Axis Bank Credit Card";
    });
    setCard(filteredData[0]);
    setLoading(false);
  });
  console.log("params", params);
  return (
    <>
      {card && !loading ? (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt={card.name}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {card.name}
            </h2>

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
              <h3 className="text-xl font-semibold text-gray-700">
                Fuel Benefits
              </h3>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Reward Rate: {card.fuel_benefits.reward_rate}</li>
                <li>
                  Monthly Reward Points:{" "}
                  {card.fuel_benefits.monthly_reward_points}
                </li>
                <li>
                  Annual Reward Points:{" "}
                  {card.fuel_benefits.annual_reward_points}
                </li>
                <li>
                  Reward Value (INR): ₹{card.fuel_benefits.reward_value_inr}
                </li>
                <li>
                  Fuel Surcharge Waiver:{" "}
                  {card.fuel_benefits.fuel_surcharge_waiver}
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

            <div className="mt-4">
              <p className="text-gray-800 font-semibold">
                <strong>Important Fact:</strong> {card.important_fact}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardDetails;
