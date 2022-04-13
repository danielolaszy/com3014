import React from "react";
import Crime from "./Crime";

const Dbresult = ({ id, category, location, status, description, date }) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 ">
          <div class="card text-center">
            <div class="card-header">{id}</div>
            <div class="card-body">
              <h5 class="card-title">{category}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{location}</h6>
              <p class="card-text">{description}</p>
            </div>
            <div class="card-footer text-muted">
              <small class="text-muted">{status}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dbresult;
