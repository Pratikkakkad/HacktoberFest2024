import React from "react";
import "./cards.scss";
import { Card } from "../../components/Card";

export default function Cards() {
  return (
    <div className="cards-container">
      <Card
        title="Beautiful Mountain"
        description="A beautiful mountain landscape view."
        imageUrl="https://via.placeholder.com/400"
      />
    </div>
  );
}
