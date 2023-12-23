import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <nav className="left-header">
        <ul>
          <li className="yellow-bkg">MARA</li>
          <li>BOOK</li>
          <li>PACKAGES</li>
          <li>HOTELS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <div className="right-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <div className="drop-down">
          {/* use js logic to handle the drop down menu */}
          <button>Login</button>
          <div className="dropdown-content">
            <ul>
              <li>Sign up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
