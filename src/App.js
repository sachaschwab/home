import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a
          className="App-link"
          href="https://sachaschwab.github.io/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sacha's Githup Page
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Have fun
        </p>
        
      </header>
    </div>
  );
}

export default App;
