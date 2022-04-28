import React from "react";
import axios from "axios";
import Apiresults from "./Apiresults";
import { useState, useEffect } from "react";

const Search = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [crimes, setCrimes] = useState([]);

  // Setting base URL for positionstack API for geocoding
  const positionstackApi = axios.create({
    baseURL: "http://api.positionstack.com/v1/",
  });

  // Setting base URL for the police API
  const policeApi = axios.create({
    baseURL: "https://data.police.uk/api/",
  });

  // Convert string from input field to coordinates
  const getCoordinates = async (e) => {
    e.preventDefault();
    const response = await positionstackApi.get("forward?access_key=" + apiKey + "&query=" + address + ", UK");
    const coordinates = await response.data;
    // console.log(coordinates.data[0].latitude);
    // console.log(coordinates.data[0].longitude);
    setLat(coordinates.data[0].latitude);
    setLng(coordinates.data[0].longitude);
  };

  // Get all crimes within a one mile radius of a single point
  const getCrimes = async () => {
    const response = await policeApi.get("crimes-street/all-crime?lat=" + lat + "&lng=" + lng);
    const crimes = await response.data;
    // console.log(crimes);
    setCrimes(crimes);
  };

  useEffect(() => {
    getCrimes();
  }, [lat, lng]);

  return (
    <>
      <section id="Search" className="bg-light rounded-3 p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="lead text-center">Find yourself a safe neighbourhood</p>
              <form className="input-group mb-3" onSubmit={getCoordinates}>
                <input type="text" className="form-control" placeholder="Search address" onChange={(event) => setAddress(event.target.value)} />
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
          <Apiresults crimes={crimes} />
        </div>
      </section>
    </>
  );
};

export default Search;
