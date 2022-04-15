import React from "react";
import { useState, useEffect } from "react";

const Report = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString().slice(0, 10));
  const [localDate, setLocalDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    console.log(isoDate);
    console.log(localDate);
  }, []);

  return (
    <>
      <div className="container bg-light p-5 rounded-3 mt-5">
        <form className="row row-cols-6 g-3 align-items-center">
          <div className="col-12">
            <h3 className="m-0">Report a Crime</h3>
          </div>

          <div className="col-12">
            <label htmlFor="inputCategory" className="form-label">
              Category
            </label>
            <select id="inputCategory" className="form-select">
              <option value="Choose..." selected>
                Choose...
              </option>
              <option value="anti-social-behaviour">Anti-social behaviour</option>
              <option value="bicycle-theft">Bicycle theft</option>
              <option value="burglary">Burglary</option>
              <option value="criminal-damage-arson">Criminal damage and arson</option>
              <option value="drugs">Drugs</option>
              <option value="other-theft">Other theft</option>
              <option value="possession-of-weapons">Possession of weapons</option>
              <option value="public-order">Public order</option>
              <option value="robbery">Robbery</option>
              <option value="shoplifting">Shoplifting</option>
              <option value="theft-from-the-person">Theft from the person</option>
              <option value="vehicle-crime">Vehicle crime</option>
              <option value="violent-crime">Violence and sexual offences</option>
              <option value="other-crime">Other crime</option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Street
            </label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Location of the crime" />
          </div>

          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="inputDescription" placeholder="Description of the crime" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Report
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Report;
