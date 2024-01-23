import React, { useState } from "react";
import destinationData from "../../data/destinationData";

export const DestinationCard = () => {
  const [itemData, setItemData] = useState(destinationData);
  const [activeButton, setActiveButton] = useState("All");
  function filterItems(cat) {
    const newItems = itemData.filter((items) => items.category === cat);
    setItemData(newItems);
  }

  function handleFilter(mode) {
    return;
  }
  return (
    <div className="DestinationCard">
      <div className="controls-btn">
        <button className={activeButton === "All" ? "active-btn" : ""}>
          <h3
            onClick={() => {
              setItemData(destinationData);
              setActiveButton("All");
            }}
          >
            All
          </h3>
        </button>
        <button className={activeButton === "Nearby" ? "active-btn" : ""}>
          <h3
            onClick={() => {
              filterItems("Near by");
              setActiveButton("Nearby");
            }}
          >
            Near By
          </h3>
        </button>
      </div>
      <h1 className="card-title">Popular Destination</h1>
      <div className="carousel">
        {itemData.map((card) => (
          <div className="slider-card" key={card.name}>
            <img src={card.img} alt="destination image" />
            <div className="card-info">
              <h1>{card.name}</h1>
              <p className="card-location">{card.location}</p>
              <p className="card-description">{card.description}</p>
              <button className="book-now">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="Book Now.png" alt="book now" />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
