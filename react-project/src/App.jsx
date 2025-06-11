import "./App.css";
import restaurant from "./images/restaurant.jpg"
import { useReducer, useEffect } from "react";

function Header({name,year}){

  return(
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items=[
  "Domate",
  "Djathe",
  "Kastravec"
]
const dishObject = items.map((dish,i)=>({
  if:i,
  title:dish,
}))
function Main({dishes,openStatus, onStatus}){
  return (
    <>
    <div>
      <button onClick={()=>onStatus(true)}>I want to open</button>
      <h2>Walcome to my restaurant {openStatus? "Open":"Closed"}</h2>
    </div>
    <main>
    <img src ={restaurant} height={200} alt ="A photo of a smiling chef owner"/>
    <ul>
     {dishes.map((dish)=><li key={dish.id} style={{listStyle:"none"}}>{dish.title}</li>)}
    </ul>
    </main>
    </>
  )
}

function App() {
  // const [status,setStatus] =useState(true)
  const[status,toggle]=useReducer( (status) => !status,true)
  useEffect(()=>{
    console.log(`The restaurant is ${status}`)
  },[status])

  return (
  <div>
  <h1>The restaurant is currently {status ?"Open":"Close"}</h1>
  <button onClick={toggle}>{status ?"Open":"Close"} Restaurant</button>
  <Header name="Stela" year={new Date().getFullYear()}/>
  <Main dishes ={dishObject} openStatus ={status} onStatus={toggle}/>
  </div>
  );
}

export default App;
