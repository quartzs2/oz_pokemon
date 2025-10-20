import { useEffect } from "react";
import "./App.css";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  return <></>;
}

export default App;
