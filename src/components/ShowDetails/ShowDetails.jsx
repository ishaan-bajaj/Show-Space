import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && (
        <img
          src={show.image.medium}
          alt={show.name}
          className="img-fluid mb-3"
        />
      )}
      <p>
        <strong>Language:</strong> {show.language}
      </p>
      <p>
        <strong>Genres:</strong> {show.genres.join(", ")}
      </p>
      <p>
        <strong>Premiered:</strong> {show.premiered}
      </p>
      <p>
        <strong>Rating:</strong> {show.rating.average || "N/A"}
      </p>
      <p>
        <strong>Network:</strong> {show.network?.name}
      </p>
      <p>
        <strong>Official Site:</strong>{" "}
        <a href={show.officialSite} target="_blank" rel="noopener noreferrer">
          {show.officialSite}
        </a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      {/* Add more details as per the available data */}
    </div>
  );
};

export default ShowDetails;
