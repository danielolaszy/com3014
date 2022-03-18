import React from "react";

const Landing = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src="" alt="logo" width="64" height="64" />
      <h1 className="display-5 fw-bold">Exploring crime</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, at.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            <a href="#Search" className="text-decoration-none text-light">
              Search
            </a>
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
