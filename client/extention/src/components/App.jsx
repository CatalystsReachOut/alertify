import React, { useState } from "react";
import Items from "./Item";
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CFormSelect } from '@coreui/react'

function App() {
  const [choice, setChoice] = useState();
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);

  function handleClick(event) {
    event.preventDefault();

    {
      choice == "domain" ? setItems((prevValue) => {
        return [...prevValue, input];
      }) : setPrice(input)
    }

    setInput("");
  }

  // console.log(items);
  // console.log(price);

  // console.log(choice);

  return (
    <div className="container">
      <div className="dropDown">
        {/* <select id="choose" value={choice} onChange={(event) => (setChoice(event.target.value))}>
          <option value="price">Price</option>
          <option value="domain">Domain</option>
        </select> */}
        <CFormSelect size="sm" className="mb-3" value={choice} aria-label="Small select example" onChange={(event) => (setChoice(event.target.value))}>
          <option>Open this select menu</option>
          <option value="domain">Domain</option>
          <option value="price">Price</option>
        </CFormSelect>
        <div>
        </div>
      </div>
      <div className="form">
        <input onChange={(e) => (setInput(e.target.value))} type={choice == "domain" ? "text" : "number"} placeholder={choice == "domain" ? "text" : "number"} value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {
          choice == "domain" ?
            <ul>
              {items.map((item, index) => {
                return (
                  <Items
                    key={index}
                    id={index}
                    text={item}
                  />
                );
              })}
            </ul>
            :
            <div className="conatiner price-section">
              <h3>Price : {price}</h3>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
