import Report from "./components/Report";
import Apisearch from "./components/Apisearch";
import Dbsearch from "./components/Dbsearch";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        {/* Navigation Bar */}
        <section id="Nav">
          <div className="container col-xxl-8 px-4">
            <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">CrimeWatch</span>
              </a>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link to="/area" className="nav-link">
                    Search Your Area
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/db" className="nav-link">
                    Database
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report" className="nav-link">
                    Report
                  </Link>
                </li>
              </ul>
            </header>
          </div>
        </section>

        {/* Hero */}
        <section id="Hero">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="px-4 py-5 my-5 text-center">
              <img className="d-block mx-auto mb-4" src="https://i.imgur.com/jSaEcax.png" alt="logo" width={650 / 10} height={820 / 10} />
              <h1 className="display-5 fw-bold">Exploring crime</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, at.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link to="/area" className="btn btn-primary btn-lg px-4 gap-3">
                    Search
                  </Link>
                  <Link to="/report" className="btn btn-outline-secondary btn-lg px-4">
                    Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Content">
          <div className="container col-xxl-8 px-4 py-5">
            <Routes>
              <Route exact path="/area" element={<Apisearch />} />
              <Route exact path="/report" element={<Report />} />
              <Route exact path="/db" element={<Dbsearch />} />
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
