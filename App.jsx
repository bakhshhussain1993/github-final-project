import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful indoor
          and outdoor plants.
        </p>

        <button onClick={() => alert("Welcome to Paradise Nursery!")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
