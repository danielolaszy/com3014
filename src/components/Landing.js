import React from "react";

const Landing = () => {
  return (
    <div className="">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold lh-1 mb-3">Explore the Latest Crime Statistics</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab laudantium ipsa minima voluptate harum quis dolore consequuntur hic blanditiis!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Search
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
