import React from "react";
import axios from "axios";
import Crime from "./Crime";
import { useState, useEffect } from "react";
const Results = ({ lat, lng }) => {
  const [crimes, setCrimes] = useState([]);

  // Setting base URL to connect to API
  const policeApi = axios.create({
    baseURL: "https://data.police.uk/api/",
  });

  const getCrimes = async () => {
    const response = await policeApi.get("crimes-street/all-crime?lat=" + lat + "&lng=" + lng);
    const crimes = await response.data;
    setCrimes(crimes);
    crimes.forEach((crime) => console.log(crime));
  };

  useEffect(() => {
    getCrimes();
  }, []);

  return (
    <>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {crimes.map((crime) => {
          return <Crime category={crime.category} id={crime.id} street={crime.location.street.name} outcome={crime.outcome_status} />;
        })}
      </div>
    </>
  );
};

export default Results;
