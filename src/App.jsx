import ItemManager from "./components/item-manager-app"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes> 
      <Route path ="mid-term-page" element = {<ItemManager />}/>
    </Routes>
  )
}

export default App
