import Navbar from "./compenents/header/header";
import Contenu from "./compenents/content/content";
import About from "./compenents/about/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contenu />
      {/* <About /> */}
    </div>
  );
}

export default App;
