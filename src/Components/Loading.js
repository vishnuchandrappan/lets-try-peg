import React from "react";

export function Loading() {
  return (
    <div className="loading">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default function isLoading({ isLoading }) {
  return isLoading === 1 ? <Loading /> : "";
}
