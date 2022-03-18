import React from "react";
import Crime from "./Crime";

const Results = ({ crimes }) => {
  return (
    <>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {crimes.map((crime) => {
          return <Crime key={crime.id} category={crime.category} id={crime.id} street={crime.location.street.name} outcome={crime.outcome_status} />;
        })}
      </div>
    </>
  );
};

export default Results;
