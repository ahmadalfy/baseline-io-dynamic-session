export function GalleryItem ({ name, link, img, credit, licenseLink, license, index }) {
  return (
    <li className="gallery-item">
      <a className="gallery-item-link" href={link} target="_blank">
        <img
          src={img}
          alt={name}
          width="1024"
          height="1024"
          loading={index > 5 ? "lazy" : "auto"}
          fetchPriority={index > 2 ? "auto" : "high"}
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
}
