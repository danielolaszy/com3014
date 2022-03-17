import React from "react";

const Search = () => {
  return (
    <>
      <p class="lead text-center">Find yourself a safe neighbourhood</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search address" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-primary" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
