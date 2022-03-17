import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  return (
    <main className="">
      {/* Navbar */}
      <section id="Nav" className="bg-dark">
        <div class="container text-white">
          <Nav />
        </div>
      </section>

      {/* Hero */}
      <section id="Hero" className="bg-dark p-5">
        <div class="container text-white">
          <Landing />
        </div>
      </section>

      {/* Search Bar */}
      <section id="Search" className="bg-light p-5">
        <div class="container">
          <div class="row justify-content-center">
            <div className="col-md-6">
              <Search />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="Results" className="bg-light p-5">
        <div class="container">
          <Results />
        </div>
      </section>
    </main>
  );
}

export default App;
