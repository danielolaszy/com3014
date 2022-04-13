import axios from "axios";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Apisearch from "./components/Apisearch";
import Dbsearch from "./components/Dbsearch";

import { useState, useEffect } from "react";

function App() {
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
          <Hero />
        </div>
      </section>

      <section id="Search">
        <div>
          <Apisearch />
        </div>
      </section>

      {/* <section id="Dbsearch">
        <div>
          <Dbsearch />
        </div>
      </section> */}
    </main>
  );
}

export default App;
