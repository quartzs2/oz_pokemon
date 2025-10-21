import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <main
      className="flex flex-col justify-center items-center 
    border border-[gray] p-[30px] rounded-[10px]"
    >
      <h1 className="text-[28px] mb-[10px]">{pokemon.name}</h1>
      <p className="whitespace-pre-wrap text-center">{pokemon.description}</p>
      <img className="w-[200px]" src={pokemon.front} alt={`${pokemon.name}의 정면 이미지`} />
    </main>
  );
}
