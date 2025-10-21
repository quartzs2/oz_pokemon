import { API_URLS } from "@constants/urls";

const LANGUAGE_KO = "ko";
const ERROR_MESSAGE_POKEMON_NOT_FOUND = (pokemonId) =>
  `Pokemon ID ${pokemonId}를 찾을 수 없습니다.`;

export const getPokemonById = async (pokemonId) => {
  const response = await fetch(API_URLS.POKEMON_SPECIES(pokemonId));

  if (!response.ok) {
    throw new Error(ERROR_MESSAGE_POKEMON_NOT_FOUND(pokemonId));
  }

  const data = await response.json();

  const pokemonData = {
    id: pokemonId,
    name: data.names.find((el) => el.language.name === LANGUAGE_KO).name,
    description: data.flavor_text_entries.find((el) => el.language.name === LANGUAGE_KO)
      .flavor_text,
    front: API_URLS.POKEMON_SPRITE_FRONT(pokemonId),
    back: API_URLS.POKEMON_SPRITE_BACK(pokemonId),
  };

  return pokemonData;
};
