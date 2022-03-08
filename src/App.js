import logo from './logo.gif';
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="hello"/>
        </main>
        <footer>
          <p>This project was coded by Charlotte and is
          <a href='https://github.com/tranquynhanh/dictionary-shecode'> open-sourced on GitHub</a> and hosted on Netlify
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
