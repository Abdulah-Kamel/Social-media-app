import Home from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar";

function App() {
  return(
    <section className="min-h-screen flex">
    <NavBar className="columns-6"/>
    <Home className="columns-6"/>
    </section>
  ) ;
}

export default App;
