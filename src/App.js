import logo from './logo.svg';
import './App.css';

function App() {

  const PassingByFunc = props =>  <div>
                                    <p>{props.title}</p>
                                    <p>{props.nmbr}</p>
                                    <p>{props.anArr[3]}</p>
                                    <h1>{JSON.stringify(props.anArr)}</h1>
                                    <p>{props.anObj.x}</p>
                                    <h1>{JSON.stringify(props.anObj)}</h1>
                                  </div>
  

  // addition(c, v) {
  //   return c + v ;
  // }
  
  //const add = (x, y) => x + y;

  const nuFunc = (n, m) => m + n;

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<PassingProps title= "Hello World" num= {5} myObj= {{ a: 2, b: 4}} myArr= {[1,2,3,4,5]}
        myFunc1= {add} myFunc2= {(xx, yy) => xx + yy} myFunc3= {addition}/> */}
        <PassingByFunc title = "Passing text" nmbr = {3} anArr = {[4,5,6,7]} anObj = {{x:10, y: 11}} inFunc = {nuFunc(2, 4)}/>
        
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
