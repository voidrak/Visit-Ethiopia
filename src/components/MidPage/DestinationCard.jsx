import React, { useState } from "react";
import destinationData from "../../data/destinationData";

export const DestinationCard = () => {
  const [itemData, setItemData] = useState(destinationData);
  const [activeButton, setActiveButton] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  function filterItems(cat) {
    const newItems = itemData.filter((items) => items.category === cat);
    setItemData(newItems);
  }

  function nextSlide() {
    setCurrentIndex = currentIndex + 1;
  }
  function perviousSlide() {
    setCurrentIndex = currentIndex - 1;
  }

  const mappedItems = itemData.map((card) => (
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
  ));
  return (
    <div className="DestinationCard">
      <div className="controls-btn">
        <div className="filter-btn">
          <button
            className={activeButton === "All" ? "active-btn" : ""}
            onClick={() => {
              setItemData(destinationData);
              setActiveButton("All");
            }}
          >
            <h3>All</h3>
          </button>
          <button
            className={activeButton === "Nearby" ? "active-btn" : ""}
            onClick={() => {
              filterItems("Near by");
              setActiveButton("Nearby");
            }}
          >
            <h3>Near By</h3>
          </button>
        </div>

        <div className="swipe-btn">
          <button>
            <img
              src="pervious_arrow.png"
              alt="pervious arrow"
              className="pervious-arrow"
              onClick={perviousSlide}
            />
          </button>
          <button>
            <img
              src="next_arrow.png"
              alt="next arrow"
              className="next-arrow"
              onClick={nextSlide}
            />
          </button>
        </div>
      </div>
      <h1 className="card-title">Popular Destination</h1>
      <div
        className="carousel"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {mappedItems}
      </div>
    </div>
  );
};
