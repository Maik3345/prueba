import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../const";
import { IArtist } from "../../models";

export const useArtists = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);

  const getArtists = async () => {
    const response = await fetch(`${API_URL}/artists`);
    const data: IArtist[] = await response.json();
    setArtists(data);
  };

  useEffect(() => {
    getArtists();
  }, []);

  const state = useMemo(() => {
    return {
      artists,
      getArtists,
    };
  }, [artists]);

  return state;
};
