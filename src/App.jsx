import { useEffect } from "react";
import "./App.scss";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { useDispatch, useSelector } from "react-redux";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"detail"}>상세정보</Link>
        <Link to={"search"}>검색</Link>
        <Link to={"favorite"}>찜 목록</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/detail/:pokemon"} element={<Detail />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
