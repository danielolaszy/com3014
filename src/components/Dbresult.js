import React from "react";
import Crime from "./Crime";

const Dbresult = ({ id, category, location, status, description, date }) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 ">
          <div className="card text-center">
            <div className="card-header">{id}</div>
            <div className="card-body">
              <h5 className="card-title">{category}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer text-muted">
              <small className="text-muted">{status}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dbresult;
