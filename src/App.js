import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          Navbar
        </span>
      </nav> */}

      <Header isDark="true" classNameProp="red" childrenElements= { <h1>Hello World</h1> }>
        
      </Header>
      
      
    </div>
  );
}

export default App;
