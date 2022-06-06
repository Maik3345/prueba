import React from "react";
import { useArtists } from "../../shared";
import ArtistCard from "./components/ArtistCard";

const Artists = () => {
  const { artists } = useArtists();

  return (
    <div className="container">
      {artists.map((artist) => (
        <ArtistCard {...artist} />
      ))}

      {!artists.length && <h2>No artists found</h2>}
    </div>
  );
};

export default Artists;
