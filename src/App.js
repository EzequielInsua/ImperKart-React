import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
    <NavBar/>
    <ItemCount maxStock={13} minStock={1}/>
    <ItemListContainer greeting={"Bienvenido a ImperKart"}/>
    </>
  );
}

export default App;
