import { useSelector } from "react-redux";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);

  return (
    <div>
      {pokemonData.data.map((el) => (
        <section>
          <div>{el.name}</div>
          <div>{el.description}</div>
          <img src={el.front} />
        </section>
      ))}
    </div>
  );
}
