import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { fetchMultiplePokemonById } from "../RTK";
import { useDispatch } from "react-redux";
import { ROUTES } from "../constants";

const NAVIGATION = [
  { path: ROUTES.HOME, label: "메인" },
  { path: ROUTES.GET_DETAIL(1), label: "상세정보" },
  { path: ROUTES.SEARCH, label: "검색" },
  { path: ROUTES.FAVORITE, label: "찜 목록" },
];

function MainLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        {NAVIGATION.map((el) => (
          <Link key={el.path} to={el.path}>
            {el.label}
          </Link>
        ))}
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
