import Card from "./CardDetails";
import { faker } from "@faker-js/faker";
import "./cartList.css";
import React from "react";
const CardList = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          body={card.body}
          title={card.title}
          user={card.user}
          date={card.date}
        />
      ))}
   
    </div>
  );
};

export default CardList;
