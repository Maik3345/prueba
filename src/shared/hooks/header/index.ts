import { useLocation, useNavigate } from "react-router-dom";
import { PagesRoutes } from "../../models";

/**
 * Hook para retornar los métodos para navegar en la aplicación
 * @returns
 */
export const useHeader = () => {
  const native = useNavigate();
  const location = useLocation();

  /**
   * Método para navegar entre las páginas
   * @param {PagesRoutes} page
   */
  const handleNavigate = (page: PagesRoutes) => {
    native(page, { replace: true });
  };

  return {
    native,
    location,
    handleNavigate,
  };
};
