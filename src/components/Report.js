import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";

const Report = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString().slice(0, 10));
  const [localDate, setLocalDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    console.log(isoDate);
    console.log(localDate);
  }, []);
=======
import axios from "axios";
import { useState, useEffect } from "react";

const Report = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("pending");

  const reportCrime = async (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/crimereports/", {
      "location": location,
      "description": description,
      "categories": category,
      "status": status,
    });
  };
>>>>>>> c58d470d3fedecc70af0e03dd94e106b95450189

  return (
    <>
      <div className="container bg-light p-5 rounded-3 mt-5">
<<<<<<< HEAD
        <form className="row row-cols-6 g-3 align-items-center">
=======
        <form className="row row-cols-6 g-3 align-items-center" onSubmit={reportCrime}>
>>>>>>> c58d470d3fedecc70af0e03dd94e106b95450189
          <div className="col-12">
            <h3 className="m-0">Report a Crime</h3>
          </div>

          <div className="col-12">
            <label htmlFor="inputCategory" className="form-label">
              Category
            </label>
<<<<<<< HEAD
            <select id="inputCategory" className="form-select">
              <option value="Choose..." selected>
                Choose...
              </option>
=======
            <select id="inputCategory" className="form-select" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choose...</option>
>>>>>>> c58d470d3fedecc70af0e03dd94e106b95450189
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
<<<<<<< HEAD
              Street
            </label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Location of the crime" />
=======
              Location
            </label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Location of the crime" onChange={(e) => setLocation(e.target.value)} />
>>>>>>> c58d470d3fedecc70af0e03dd94e106b95450189
          </div>

          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Description
            </label>
<<<<<<< HEAD
            <input type="text" className="form-control" id="inputDescription" placeholder="Description of the crime" />
=======
            <input type="text" className="form-control" id="inputDescription" placeholder="Description of the crime" onChange={(event) => setDescription(event.target.value)} />
>>>>>>> c58d470d3fedecc70af0e03dd94e106b95450189
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
