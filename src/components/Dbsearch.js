import React from "react";
import Dbresults from "./Dbresult";
import axios from "axios";
import { useState, useEffect } from "react";

const Dbsearch = () => {
  const [crimeId, setCrimeId] = useState(0);
  const [crime, setCrime] = useState(null);

  // Setting base URL for API
  const backendApi = axios.create({
    baseURL: "",
  });

  // Gets crime by ID
  const getCrime = async (e) => {
    e.preventDefault();
    const response = await backendApi.get("");
    const crimedb = await response.data;
  };

  return (
    <>
      <section id="Search" className="bg-light rounded-3 p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="lead text-center">Find a crime</p>
              <form className="input-group mb-3" onSubmit={getCrime}>
                <input type="text" className="form-control" placeholder="Enter crime ID" onChange={(event) => setCrimeId(event.target.value)} />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="Results" className="bg-light rounded-3 p-5">
        <div className="container">
          <Dbresults
            id={99618994}
            category={"Violent-Crime"}
            location={"On or near London Road"}
            status={"Unable to prosecute suspect"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo doloribus unde dolorem animi facere, eligendi consectetur tenetur enim recusandae vitae pariatur. Blanditiis quos, similique alias ratione praesentium porro quaerat?"
            }
            date={1}
          />
          {/* <Dbresults id={crime.id} category={crime.category} location={crime.location} status={crime.status} description={crime.description} date={crime.date} /> */}
        </div>
      </section>
    </>
  );
};
export default Dbsearch;
