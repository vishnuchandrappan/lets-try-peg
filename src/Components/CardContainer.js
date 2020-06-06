import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
function CardContainer({ data, show }) {
  return (
    <div className={show ? "card-container" : "card-container hide"}>
      {data.map((item, index) => (
        <Card item={item} index={index + 1} key={index} />
      ))}
    </div>
  );
}

function mapStateToProps({ data }) {
  return {
    data: data.data,
    show: data.show,
  };
}

export default connect(mapStateToProps)(CardContainer);
