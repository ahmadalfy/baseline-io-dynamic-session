// React stuff
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS imports
import "./css/normalize.css"
import "./css/styles.css"

// Images
import images from "./js/images.js";

createRoot(document.querySelector("main")).render(
  <StrictMode>
    <h1>
      JWST image gallery
    </h1>
    <form className="gallery-search">
      <input
        className="gallery-search-input"
        id="gallery-search"
        type="search"
        name="gallery-search"
        placeholder="Search for JWST images..."
      />
    </form>
    <ul className="jwst-gallery">
      {
        images.map((item, index) => {
          return (
            <li className="gallery-item" key={index}>
              <a className="gallery-item-link" href={item.link} target="_blank">
                <img
                  src={item.img}
                  alt={item.name}
                />
              </a>
              <h3 className="gallery-item-name">
                {item.name}
              </h3>
              <p className="gallery-item-credit">
                {item.credit}
              </p>
              <p className="gallery-item-license">
                <a href={item.licenseLink} target="_blank">{item.license}</a>
              </p>
            </li>
          );
        })
      }
    </ul>
    <footer>
      <p>&copy; 2025 &mdash; All rights reserved by creators where shown.</p>
    </footer>
  </StrictMode>
);
