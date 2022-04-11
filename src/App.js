import axios from "axios";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Search from "./components/Search";
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
          <Search />
        </div>
      </section>
    </main>
  );
}

export default App;
