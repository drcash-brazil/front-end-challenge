import "./styles/App.css";
import DrCash from "./assets/logoDrCash.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={DrCash} alt="Logo Drcash" />
        <p>I-Clinic - Processo Seletivo DrCash</p>
      </header>
    </div>
  );
}

export default App;
