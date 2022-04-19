import "./App.css";
import LandingPage from "./components/landingpage/LandingPage";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
