import React from "react";
import { IArtist } from "../../../../shared";
import "./index.css";

const ArtistCard = ({ name, id, image }: IArtist) => {
  return (
    <div
      key={`card-${id}`}
      className="artistCard"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default ArtistCard;
