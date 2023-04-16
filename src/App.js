import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./App.css";
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
        <div className="filter-section">
          <Collapsible
            trigger="Spirit"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
          >
            <div className="filter-items">
              {spiritList.map((spirit) => {
                return (
                  <button
                    key={spirit}
                    type="button"
                    className="collapsible-button"
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
