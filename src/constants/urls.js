export const ROUTES = {
  HOME: "/",
  DETAIL: "/detail/:pokemonId",
  SEARCH: "/search",
  FAVORITE: "/favorite",
  GET_DETAIL: (pokemonId) => `/detail/${pokemonId}`,
};
