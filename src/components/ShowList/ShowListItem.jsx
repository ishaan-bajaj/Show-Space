import React from "react";
import { Link } from "react-router-dom";

const ShowListItem = ({ show }) => {
  return (
    <div className="col-md-4 mb-3">
      <Link
        to={`/show/${show.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card h-100">
          <img
            src={show.image?.medium}
            className="card-img-top"
            alt={show.name}
          />
          <div className="card-body">
            <h5 className="card-title">{show.name}</h5>
            <p className="card-text">
              Language: {show.language}
              <br />
              Genres: {show.genres.join(", ")}
              <br />
              Rating: {show.rating?.average || "N/A"}
            </p>
            {show.officialSite && (
              <a
                href={show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Site
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShowListItem;
