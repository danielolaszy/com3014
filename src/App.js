import axios from "axios";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Results from "./components/Results";
import { useState, useEffect } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [address, setAddress] = useState("");
<<<<<<< HEAD
  const [lat, setLat] = useState(51.2862083);
  const [lng, setLng] = useState(-0.767494);
=======
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
    const response = await positionstackApi.get("forward?access_key=" + apiKey + "&query=" + address);
    const coordinates = await response.data;
    setLat(coordinates.data[0].latitude);
    setLng(coordinates.data[0].longitude);
  };

  // Get all crimes within a one mile radius of a single point
  const getCrimes = async () => {
    const response = await policeApi.get("crimes-street/all-crime?lat=" + lat + "&lng=" + lng);
    const crimes = await response.data;
    setCrimes(crimes);
  };

  useEffect(() => {
    getCrimes();
  }, [lat, lng]);
>>>>>>> 53a47987b062bb239a6952795e58a9191d15f44d

  return (
    <main>
      {/* Navbar */}
      <section id="Nav">
        <div className="container">
          <Nav />
        </div>
      </section>

      {/* Hero */}
      <section id="Hero">
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

      {/* Results */}
      <section id="Results" className="bg-light p-5">
        <div className="container">
          <Results crimes={crimes} />
        </div>
      </section>
    </main>
  );
}

export default App;
