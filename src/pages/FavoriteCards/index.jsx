import React from "react";
import { Card } from "../../components/Card";
import Data from "../../mock/CardsData.json";

export default function FavoriteCard() {
  return (
    <div className="cards-container grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {Data.cards.length &&
        Data.cards.slice(2).map((card) => <Card data={card} />)}
    </div>
  );
}
