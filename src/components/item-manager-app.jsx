import "./item-manager-app.css"

import { useState, useRef } from "react";

import deleteLogo from '../assets/delete.svg';
import stationaryLogo from '../assets/ink_pen.svg';
import kitchenwareLogo from "../assets/flatware.svg";
import applianceLogo from "../assets/electrical_services.svg";

function ItemManager () {
  

  /*
   * !!! IMPORTANT !!!
   * - You MUST use the given states and refs in your code.
   * - You MAY add additional state, refs, and variables if needed.
   */
  const [id, setId] = useState(0);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // You must use this ref for the item name input
  const itemName = useRef(null);

  //TODO: Your code goes here
  function increaseCounter () {
    setId(id+1);
  }

  const handleAddItem = () => { 
    if (itemName.current.value == "") {
      setErrorMsg("Please enter the item name")
    } else if (category == "") { 
      setErrorMsg("Please select the item category")
    } else if (price == "" || price < 0) {
      setErrorMsg("Please enter a valid price")
    } else if (!category || !price) { 
      setErrorMsg("Please fill out the form")
    } else { 
      setErrorMsg("")
      increaseCounter();
    }
  }
  
  /*
   * !!! IMPORTANT !!!
   * - Implement your output based on the given sample layout.
   * - The id and className attributes below MUST be preserved.
   * - Your CSS MUST use the existing id and className selectors.
   */
  return (
    <>
      <div id="h1">
        Item Management
      </div>
      <div id="data-area">
        <table id="item-table" className="item-table">
          <thead>
            <tr>
              <th id="col-item-id">ID</th>
              <th id="col-item-name">Name</th>
              <th id="col-item-category">Category</th>
              <th id="col-item-price">Price</th>
              <th id="col-item-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*
              * TODO: Your code goes here
              * !!! IMPORTANT !!!
              * - All items must be listed here (above the form row).
              * - Your input form must be implemented as the LAST row in this table.
              */}
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.category}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <img className="delete-icon" src={deleteLogo} alt="Delete" onClick={() => setItems(items.filter((i) => i.id !== item.id))} style={{cursor: 'pointer'}}/>
                  </td>
                </tr>
              ))}
              <tr>
              <td><div>{id}</div></td>
              
              <td><input type="text" ref={itemName} id="nameInput" placeholder ="Item Name"/></td>

              <td> 
                <select value = {category} onChange={(e) => setCategory(e.target.value)}>
                  <option value =""></option>
                  <option value ="Stationary">Stationary</option>
                  <option value ="Kitchenware">Kitchenware</option>
                  <option value ="Appliance">Appliance</option>
                </select>
              </td>

              <td> 
                <input type = "number" placeholder = "Item Price" value = {price}
                onChange={(e) => setPrice(e.target.value)}/>
              </td>
              <td>
                <button type ="button" onClick={(handleAddItem)}>Add Item</button>
              </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div id="error-message">
         {/* You MUST display the errorMsg state here. */}
        <p> {errorMsg} </p>
      </div> 
     
    </>
  );
}

export default ItemManager