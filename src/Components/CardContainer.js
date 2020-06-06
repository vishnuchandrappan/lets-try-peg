import React from "react";
import Card from "./Card";
export default function CardContainer({ data, show }) {
  return (
    <div className={show ? "card-container" : "card-container hide"}>
      {data.map((item, index) => (
        <Card item={item} index={index + 1} key={index} />
      ))}
    </div>
  );
}
