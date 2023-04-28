import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./App.css";
import Cocktail from "./components/cocktail/Cocktail";

import drinks from "./data/cocktails.json";

const spiritList = [
  "Brandy",
  "Gin",
  "Mezcal",
  "Rum",
  "Tequila",
  "Vodka",
  "Whiskey",
  "Wine",
  "Other",
];

const glassList = [
  "Collins Glass",
  "Copper Mug",
  "Coupe",
  "Flute",
  "Julep Cup",
  "Pint Glass",
  "Rocks Glass",
  "Tiki Glass",
];

const liqueurList = [
  "Aperol",
  "Apricot Liqueur",
  "Bénédictine",
  "Campari",
  "Cointreau",
  "Curaçao",
  "Dry Vermouth",
  "Green Chartreuse",
  "Maraschino Liqueur",
  "Sweet Vermouth",
  "Triple sec",
  "Yellow Chartreuse",
];

const bittersList = ["Angostura", "Orange", "Peychaud's"];

const juiceList = [
  "Cranberry",
  "Grapefruit",
  "Lemon",
  "Lime",
  "Orange",
  "Pineapple",
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [spiritType, setSpiritType] = useState("");
  const [liqueurType, setLiqueurType] = useState("");
  const [juiceType, setJuiceType] = useState("");
  const [bittersType, setBittersType] = useState("");
  const [glassType, setGlassType] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDrinks = drinks.filter((drink) => {
    return (
      drink.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      drink.spirit.includes(spiritType) &&
      drink.liqueur.includes(liqueurType) &&
      drink.juice.includes(juiceType) &&
      drink.bitters.includes(bittersType) &&
      drink.glassware.includes(glassType)
    );
  });

  const clearFilters = () => {
    const collectionSpirit = document.getElementsByClassName("active-spirit");
    for (var i = 0; i < collectionSpirit.length; i++) {
      collectionSpirit[i].classList.remove("active-spirit");
    }
    setSpiritType("");

    const collectionLiqueur = document.getElementsByClassName("active-liqueur");
    for (i = 0; i < collectionLiqueur.length; i++) {
      collectionLiqueur[i].classList.remove("active-liqueur");
    }
    setLiqueurType("");

    const collectionJuice = document.getElementsByClassName("active-juice");
    for (i = 0; i < collectionJuice.length; i++) {
      collectionJuice[i].classList.remove("active-juice");
    }
    setJuiceType("");

    const collectionBitters = document.getElementsByClassName("active-bitters");
    for (i = 0; i < collectionBitters.length; i++) {
      collectionBitters[i].classList.remove("active-bitters");
    }
    setBittersType("");

    const collectionGlass = document.getElementsByClassName("active-glass");
    for (i = 0; i < collectionGlass.length; i++) {
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

  const setLiqueurFilter = (e) => {
    const collection = document.getElementsByClassName("active-liqueur");
    for (var i = 0; i < collection.length; i++) {
      collection[i].classList.remove("active-liqueur");
    }
    if (liqueurType === e.currentTarget.getAttribute("data-value")) {
      setLiqueurType("");
    } else {
      e.currentTarget.classList.toggle("active-liqueur");
      setLiqueurType(e.currentTarget.getAttribute("data-value"));
    }
  };

  const setBittersFilter = (e) => {
    const collection = document.getElementsByClassName("active-bitters");
    for (var i = 0; i < collection.length; i++) {
      collection[i].classList.remove("active-bitters");
    }
    if (bittersType === e.currentTarget.getAttribute("data-value")) {
      setBittersType("");
    } else {
      e.currentTarget.classList.toggle("active-bitters");
      setBittersType(e.currentTarget.getAttribute("data-value"));
    }
  };

  const setJuiceFilter = (e) => {
    const collection = document.getElementsByClassName("active-juice");
    for (var i = 0; i < collection.length; i++) {
      collection[i].classList.remove("active-juice");
    }
    if (juiceType === e.currentTarget.getAttribute("data-value")) {
      setJuiceType("");
    } else {
      e.currentTarget.classList.toggle("active-juice");
      setJuiceType(e.currentTarget.getAttribute("data-value"));
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
            open={true}
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
            trigger="Liqueur"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
            open={false}
          >
            <div className="filter-items">
              {liqueurList.map((liqueur) => {
                return (
                  <button
                    key={liqueur}
                    type="button"
                    className="collapsible-button"
                    data-value={liqueur}
                    onClick={setLiqueurFilter}
                  >
                    {liqueur}
                  </button>
                );
              })}
            </div>
          </Collapsible>
          <Collapsible
            trigger="Juice"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
            open={false}
          >
            <div className="filter-items">
              {juiceList.map((juice) => {
                return (
                  <button
                    key={juice}
                    type="button"
                    className="collapsible-button"
                    data-value={juice}
                    onClick={setJuiceFilter}
                  >
                    {juice}
                  </button>
                );
              })}
            </div>
          </Collapsible>
          <Collapsible
            trigger="Bitters"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
            open={false}
          >
            <div className="filter-items">
              {bittersList.map((bitters) => {
                return (
                  <button
                    key={bitters}
                    type="button"
                    className="collapsible-button"
                    data-value={bitters}
                    onClick={setBittersFilter}
                  >
                    {bitters}
                  </button>
                );
              })}
            </div>
          </Collapsible>
          <Collapsible
            trigger="Glassware"
            triggerClassName="filter-tab"
            triggerOpenedClassName="filter-tab--open"
            open={false}
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
            <button
              type="button"
              onClick={clearFilters}
              style={{ margin: "3px" }}
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className="main-section">
          <Cocktail drinks={filteredDrinks} />
        </div>
      </div>
    </div>
  );
}

export default App;
