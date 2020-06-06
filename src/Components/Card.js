import React from "react";

export default function Card({ index, item }) {
  return (
    <div className="card">
      <span>{index}. </span>
      <span className="name">{item}</span>
    </div>
  );
}
