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

const glassList = [
  "Collins Glass",
  "Copper Mug",
  "Coupe",
  "Julep Cup",
  "Rocks Glass",
  "Tiki Glass",
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [spiritType, setSpiritType] = useState("");
  const [glassType, setGlassType] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return (
      drink.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      drink.spirit.includes(spiritType) &&
      drink.glassware.includes(glassType)
    );
  });

  const clearFilters = () => {
    const collectionSpirit = document.getElementsByClassName("active-spirit");
    for (var i = 0; i < collectionSpirit.length; i++) {
      collectionSpirit[i].classList.remove("active-spirit");
    }
    setSpiritType("");
    const collectionGlass = document.getElementsByClassName("active-glass");
    for (var i = 0; i < collectionGlass.length; i++) {
      collectionGlass[i].classList.remove("active-glass");
    }
    setGlassType("");
    setSearchValue("");
  };

  const setSpiritFilter = (e) => {
    const collection = document.getElementsByClassName("active-spirit");
    for (var i = 0; i < collection.length; i++) {
      collection[i].classList.remove("active-spirit");
    }
    if (spiritType === e.currentTarget.getAttribute("data-value")) {
      setSpiritType("");
    } else {
      e.currentTarget.classList.toggle("active-spirit");
      setSpiritType(e.currentTarget.getAttribute("data-value"));
    }
  };

  const setGlassFilter = (e) => {
    const collection = document.getElementsByClassName("active-glass");
    for (var i = 0; i < collection.length; i++) {
      collection[i].classList.remove("active-glass");
    }
    if (glassType === e.currentTarget.getAttribute("data-value")) {
      setGlassType("");
    } else {
      e.currentTarget.classList.toggle("active-glass");
      setGlassType(e.currentTarget.getAttribute("data-value"));
    }
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
            <button className="search-button">
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
          <Collapsible
            trigger="Glassware"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
          >
            <div className="filter-items">
              {glassList.map((glass) => {
                return (
                  <button
                    key={glass}
                    type="button"
                    className="collapsible-button"
                    data-value={glass}
                    onClick={setGlassFilter}
                  >
                    {glass}
                  </button>
                );
              })}
            </div>
          </Collapsible>
          <div>
            <button type="button" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
        <Cocktail drinks={filteredDrinks} />
      </div>
    </div>
  );
}

export default App;
