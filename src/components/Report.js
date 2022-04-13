import React from "react";

const Report = () => {
  return (
    <>
      <div className="container bg-light p-5 rounded-3 mt-5">
        <form class="row row-cols-6 g-3 align-items-center">
          <div class="col-12">
            <h3 className="m-0">Report a Crime</h3>
          </div>

          <div class="col-12">
            <label for="inputCategory" class="form-label">
              Category
            </label>
            <select id="inputCategory" class="form-select">
              <option selected>Choose...</option>
              <option>Anti-social behaviour</option>
              <option>Bicycle theft</option>
              <option>Burglary</option>
              <option>Criminal damage and arson</option>
              <option>Drugs</option>
              <option>Other theft</option>
              <option>Possession of weapons</option>
              <option>Public order</option>
              <option>Robbery</option>
              <option>Shoplifting</option>
              <option>Theft from the person</option>
              <option>Vehicle crime</option>
              <option>Violence and sexual offences</option>
              <option>Other crime</option>
            </select>
          </div>

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Street
            </label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Location of the crime" />
          </div>

          <div class="col-12">
            <label for="inputDescription" class="form-label">
              Description
            </label>
            <input type="text" class="form-control" id="inputDescription" placeholder="Description of the crime" />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Report
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Report;
