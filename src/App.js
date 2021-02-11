import logo from "./logo.svg";
import "./App.css";
//import PassingProps from "./components/PassingProps";
//import PassingByFunc from "./components/PassingByFunc";
//import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

function App() {
  // function addition(c, v) {
  //    return c + v ;
  //  }

  // const add = (x, y) => x + y;

  //const nuFunc = (n, m) => m + n;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<PassingProps title= "Hello World" num= {5} myObj= {{ a: 2, b: 4}} myArr= {[1,2,3,4,5]}
        myFunc1= {add} myFunc2= {(xx, yy) => xx + yy} myFunc3= {addition}/> 
        <PassingByFunc title = "Passing text through a func" nmbr = {3} anArr = {[4,5,6,7]} anObj = {{x:10, y: 11}} inFunc = {nuFunc(2, 4)}/> */}

        <ImageSlider />

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
