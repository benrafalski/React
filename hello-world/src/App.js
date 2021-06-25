import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

// this is the view inside of the browser, functional component
function App() {
  return (
    // functional component is 'Greet', class component is 'Welcome'
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
