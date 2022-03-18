import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Search from "./components/Search";
import Results from "./components/Results";
import Crime from "./components/Crime";
import { useState, useEffect } from "react";

function App() {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(51.2428657);
  const [lng, setLng] = useState(-0.5896118);

  return (
    <main>
      {/* Navbar */}
      <section id="Nav" className="">
        <div className="container">
          <Nav />
        </div>
      </section>

      {/* Hero */}
      <section id="Hero" className="">
        <div className="container col-xxl-8 px-4 py-5">
          <Landing />
        </div>
      </section>

      {/* Search Bar */}
      <section id="Search" className="bg-light p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="lead text-center">Find yourself a safe neighbourhood</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search address" onChange={(event) => setAddress(event.target.value)} />
                <button className="btn btn-primary" type="button" id="button-addon2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="Results" className="bg-light p-5">
        <div className="container">
          <Results lat={lat} lng={lng} />
        </div>
      </section>
    </main>
  );
}

export default App;
