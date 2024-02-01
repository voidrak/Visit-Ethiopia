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

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= itemData.length - 1) {
      newIndex = itemData.length - 2;
    }

    setCurrentIndex(newIndex);
  }

  const mappedItems = itemData.map((card) => (
    <div
      className="slider-card"
      key={card.name}
      style={{
        transform: `translate(-${currentIndex * 90}%)`,
        backgroundImage: `url(${card.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="drop-shadow"> </div> */}
      <div className="card-info">
        <h1>{card.name}</h1>
        <p className="card-location">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          {card.location}
        </p>
        <p className="card-description">{card.description}</p>
      </div>
      <button className="book-now">
        <a href={`${card.link}`} target="_blank" rel="noopener noreferrer">
          <img src="Book Now.png" alt="book now" />
        </a>
      </button>
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
              onClick={() => {
                updateIndex(currentIndex - 1);
              }}
            />
          </button>
          <button>
            <img
              src="next_arrow.png"
              alt="next arrow"
              className="next-arrow"
              onClick={() => {
                updateIndex(currentIndex + 1);
              }}
            />
          </button>
        </div>
      </div>
      <h1 className="card-title">Popular Destination</h1>
      <div className="carousel">{mappedItems}</div>
    </div>
  );
};
