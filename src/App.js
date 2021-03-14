import logo from './logo.svg';
import './App.css';
import ColorChanger from './ColorChanger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>react app - color changer</h1>
      </header>
      <ColorChanger />
    </div>
  );
}

export default App;
