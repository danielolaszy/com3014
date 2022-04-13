import React from "react";
import { useState, useEffect } from "react";

const Crime = ({ id, category, location, status }) => {
  const [border, setBorder] = useState("");

  // Checks status category and colors border accordingly
  const checkOutcome = () => {
    if (status !== null) {
      if (status.category.includes("Under investigation") || status.category.includes("Awaiting court")) {
        setBorder("border-warning");
      }
      if (
        status.category.includes("Investigation complete") ||
        status.category.includes("Further investigation") ||
        status.category.includes("Unable to prosecute") ||
        status.category.includes("Local resolution") ||
        status.category.includes("Offender given a caution")
      ) {
        setBorder("border-success");
      }
    }
    if (status == null) {
      setBorder("border-danger");
    }
  };
  useEffect(() => {
    checkOutcome();
  }, []);

  return (
    <div className="col justify-content-center">
      <div id={id} className={"card text-dark bg-light mb-3 " + border} style={{ Width: "20rem", height: "15rem" }}>
        <div className="card-header">{id}</div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{category}</h5>
          <p className="card-text">{location}</p>
        </div>
        <div className="card-footer bg-transparent">{status ? status.category : "Status unknown"}</div>
      </div>
    </div>
  );
};

export default Crime;
