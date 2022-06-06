import { API_URL } from "../const";

export const generateUrl = (path: string) => {
  return `${API_URL}/${path}`;
};
