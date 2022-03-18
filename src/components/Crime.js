import React from "react";
import { useState, useEffect } from "react";

const Crime = ({ category, id, street, outcome }) => {
  const [border, setBorder] = useState("");

  const checkOutcome = () => {
    if (outcome !== null) {
      if (outcome.category.includes("Under investigation") || outcome.category.includes("Awaiting court")) {
        setBorder("border-warning");
      }
      if (
        outcome.category.includes("Investigation complete") ||
        outcome.category.includes("Further investigation") ||
        outcome.category.includes("Unable to prosecute") ||
        outcome.category.includes("Local resolution")
      ) {
        setBorder("border-success");
      }
    }
    if (outcome == null) {
      setBorder("border-danger");
    }
  };
  useEffect(() => {
    checkOutcome();
  }, []);

  return (
    <div className="col justify-content-center">
      <div className={"card text-dark bg-light mb-3 " + border} style={{ Width: "20rem", height: "15rem" }}>
        <div className="card-header">{id}</div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{category}</h5>
          <p className="card-text">{street}</p>
        </div>
        <div class="card-footer bg-transparent">{outcome ? outcome.category : "Status unknown"}</div>
      </div>
    </div>
  );
};

export default Crime;
