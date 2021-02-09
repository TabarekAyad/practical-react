import logo from './logo.svg';
import './App.css';
import PassingProps from './components/PassingProps'

function App() {

  addition(c, v) {
    return c + v ;
  }
  
  const add = (x, y) => x + y;
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PassingProps title = "Hello World" num = {5} myObj = {{ a: 2, b: 4}} myArr = {[1,2,3,4,5]}
        myFunc1 = {add} myFunc2 = {(xx, yy) => xx + yy} myFunc3 = {addition}/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
