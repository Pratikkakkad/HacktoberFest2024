import React from "react";
import "./cards.scss";
import { Card } from "../../components/Card";
import Data from "../../mock/CardsData.json";

export default function Cards() {
  return (
    <div className="cards-container grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {Data.cards.length && Data.cards.map((card) => <Card data={card} />)}
    </div>
  );
}
