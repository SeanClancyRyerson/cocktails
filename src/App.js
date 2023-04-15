import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./App.css";
import "./styles/Header.css";
import "./styles/Search.css";
import "./styles/Filter.css";
import Cocktail from "./components/cocktail/Cocktail";

import drinks from "./data/cocktails.json";

const spiritList = [
  "brandy",
  "gin",
  "mezcal",
  "rum",
  "tequila",
  "vodka",
  "whiskey",
  "other",
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [spiritType, setSpiritType] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return (
      drink.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      drink.spirit.includes(spiritType)
    );
  });

  const setSpiritFilter = (e) => {
    if (spiritType === e.currentTarget.getAttribute("data-value")) {
      setSpiritType("");
    } else {
      setSpiritType(e.currentTarget.getAttribute("data-value"));
    }
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("active");
  };

  return (
    <div className="App">
      <div className="header-section">
        <div className="header-title">
          <h2>cocktails.js</h2>
          <h2>cocktails.js</h2>
        </div>
        <div>
          <div className="search-container">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
            />
            <button>
              <Icon path={mdiMagnify} size={0.7} />
            </button>
          </div>
        </div>
        <img className="logo-icon" src="./logo512.png" alt="logo icon" />
      </div>
      <div className="body-section">
        <div>
          <Collapsible trigger="Spirit">
            <div className="filter-section">
              {spiritList.map((spirit) => {
                return (
                  <button
                    key={spirit}
                    type="button"
                    className="collapsible-section"
                    data-value={spirit}
                    onClick={setSpiritFilter}
                  >
                    {spirit}
                  </button>
                );
              })}
            </div>
          </Collapsible>
        </div>
        <Cocktail drinks={filteredDrinks} />
      </div>
    </div>
  );
}

export default App;
