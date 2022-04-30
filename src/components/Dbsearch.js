import React from "react";
import Dbresults from "./Dbresult";
import axios from "axios";
import { useState, useEffect } from "react";

const Dbsearch = () => {
  const [crimeId, setCrimeId] = useState(0);
  const [crime, setCrime] = useState(null);
  const [crimesArray, setCrimesArray] = useState([]);

  // Gets Crimes
  const getCrimes = async () => {
    console.log("Getting crimes...");
    const response = await axios.get("http://127.0.0.1:8000/");
    const crimes = await response.data;
    console.log("Setting crimes array...");
    setCrimesArray(crimes);
    console.log("Finding crime with ID " + crimeId);
    setCrime(crimesArray.find((crime) => crime.id === parseInt(crimeId)));
  };

  useEffect(() => {
    console.log("Crime ID: ", parseInt(crimeId));
  }, [crimeId]);

  return (
    <>
      <section id="Search" className="bg-light rounded-3 p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="lead text-center">Find a crime</p>
              <form className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter crime ID" onChange={(event) => setCrimeId(event.target.value)} />
                <button className="btn btn-primary" type="button" onClick={() => getCrimes()}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="Results" className="bg-light rounded-3 p-5">
        <div className="container">
          {crime ? (
            <Dbresults id={crime.id} category={crime.categories} location={crime.location} status={crime.status} description={crime.description} date={crime.crime_date} />
          ) : (
            console.log("Crime not found")
          )}

          {/* <Dbresults id={crime.id} category={crime.category} location={crime.location} status={crime.status} description={crime.description} date={crime.date} /> */}
        </div>
      </section>
    </>
  );
};
export default Dbsearch;
