import './App.css';


function App() {
  return (
    <div className="container">
     <Header/>
     <Menu/>
     <Footer/>
    </div>
  );
}

function Header(){
  return(
    <div className='header'>
      <h1>-FAST REACT PIZZA CO.-</h1>
    </div>
  )
}

function Menu(){
  return(
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza name = "Pizza Spinaci" 
        ingredients = "tomato, mozarella, spinach, and ricotta cheese" 
        photoName = "pizzas/spinaci.jpg"
        price = {10}
      />
      <Pizza name = "Pizza Funghi" 
        ingredients = "Tomato,mushrooms" 
        photoName = "pizzas/funghi.jpg"
        price = {12}
      />
    </main>
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
function Pizza(props){
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name}/>
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}</span>
    </div>    
  )
}

export default App;
