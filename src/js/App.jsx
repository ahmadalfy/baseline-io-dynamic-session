// React stuff
import { StrictMode, useState } from "react";

// Image metadata
import images from "../js/images.js";

export default function App () {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ matchingImages, setMatchingImages ] = useState(images);

  function handleSearchQuery (event) {
    const currentSearchQuery = event.target.value;

    setSearchQuery(currentSearchQuery);
  }

  function handleMatchingImages () {
  }

  return (
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
          onChange={handleSearchQuery}
        />
      </form>
      <ul className="jwst-gallery">
        {
          images.map(({ name, link, img, credit, licenseLink, license }, index) => {
            return (
              <li className="gallery-item" key={name}>
                <a className="gallery-item-link" href={link} target="_blank">
                  <img
                    src={img}
                    alt={name}
                    width="1024"
                    height="1024"
                  />
                </a>
                <h3 className="gallery-item-name">
                  {name}
                </h3>
                <p className="gallery-item-credit">
                  {credit}
                </p>
                <p className="gallery-item-license">
                  <a href={licenseLink} target="_blank">{license}</a>
                </p>
              </li>
            );
          })
        }
      </ul>
      <footer>
        <p>&copy; 2025 — All rights reserved by creators and contributors where shown.</p>
      </footer>
    </StrictMode>
  );
}
