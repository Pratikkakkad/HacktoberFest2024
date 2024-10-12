import React from "react";
import "./cards.scss";
import { Card } from "../../components/Card";
import Data from "../../mock/CardsData.json";

export default function Cards() {
  return (
    <div className="cards-container">
      {Data.cards.length && Data.cards.map((card) => <Card data={card} />)}
    </div>
  );
}
