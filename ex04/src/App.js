import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import Students from './Components/Students';

function App() {
  return (
    <div className="App">
        <Students/>
        <hr/>
        <Products/>
    </div>
  );
}

export default App;
