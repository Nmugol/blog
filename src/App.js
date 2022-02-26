import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  const title = "Welcom";


  return (
    <div className="App">
      <Navbar />
      <div className="conteiner">
        <Home />
      </div>
    </div>
  );
}

export default App;
