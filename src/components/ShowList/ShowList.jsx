import React from "react";
import { Link } from "react-router-dom";
import ShowListItem from "./ShowListItem";

const ShowList = ({ shows }) => {
  return (
    <div>
      <div className="row">
        {shows.map((item) => (
          <ShowListItem key={item.show.id} show={item.show} />
        ))}
      </div>
    </div>
  );
};

export default ShowList;
