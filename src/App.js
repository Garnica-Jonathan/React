import NavBar from "./Components/NavBar"
import "./app/style.css"
import ItemListContainer from "./Components/ItemListContainer";

const App = () =>{
  const onAdd = (cantidad) =>{
    console.log(`Compraste ${cantidad} productos`)


  }

  return (
    <div>
    <NavBar/>
    <ItemListContainer initial={1} stock={5} onAdd={onAdd}/>
    </div>
  );

}

export default App;