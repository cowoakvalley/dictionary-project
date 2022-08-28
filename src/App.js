import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>DICTIONARY</h1>
        </header>
        <Dictionary />
        <footer className="text-center">
          <p>
            open source coded by{" "}
            <a href="https://github.com/cowoakvalley/dictionary-project">
              cowoakvalley
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
