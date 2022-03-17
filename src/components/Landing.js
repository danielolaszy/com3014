import React from "react";

const Landing = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Find yourself a safe neighbourhood</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, perferendis.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search address" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
