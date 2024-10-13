import React from "react";
import { Card } from "../../components/Card";
import CardsData from "../../mock/DetailedCardData.json";

export default function Cards() {
  return (
    <div className="cards-container grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {CardsData.cards.length &&
        CardsData.cards.map((card) => <Card data={card} />)}
    </div>
  );
}
