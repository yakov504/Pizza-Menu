import './App.css';


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
     <Pizza/>
     <Pizza/>
     <Pizza/>
    </div>
  );
}
function Pizza(){
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza"/>
      <h2>Pizza Spinaci</h2>
      <p>tomato, mozarella, spinach, and ricotta cheese</p>
    </div>    
  )
}

export default App;
