import './App.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <Menu/>
     <Footer/>
    </div>
  );
}

function Header(){
  return(
    <div>
      <h1>-FAST REACT PIZZA CO.-</h1>
    </div>
  )
}

function Menu(){
  return(
    <div>
      <h2>Our menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
  )
}

function Footer(){

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // const isOpen = 

  return(
   <footer>
    {new Date().toLocaleDateString()}we are currently open
   </footer>
  )
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
