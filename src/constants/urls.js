export const ROUTES = {
  HOME: "/",
  DETAIL: "/detail/:pokemonId",
  SEARCH: "/search",
  FAVORITE: "/favorite",
  GET_DETAIL: (pokemonId) => `/detail/${pokemonId}`,
};

const BASE_URL = {
  POKE_API: "https://pokeapi.co/api/v2",
  SPRITE: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
};

export const API_URLS = {
  POKEMON_SPECIES: (pokemonId) => `${BASE_URL.POKE_API}/pokemon-species/${pokemonId}/`,
  POKEMON_SPRITE_FRONT: (pokemonId) => `${BASE_URL.SPRITE}/${pokemonId}.png`,
  POKEMON_SPRITE_BACK: (pokemonId) => `${BASE_URL.SPRITE}/back/${pokemonId}.png`,
};
