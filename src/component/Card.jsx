import { Link } from "react-router-dom";
import { ROUTES } from "@constants";

export const Card = ({ pokemon }) => {
  return (
    <article className="w-[150px]">
      <Link
        to={ROUTES.GET_DETAIL(pokemon.id)}
        className="border border-gray-400 flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-[10px] hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`${pokemon.name} 포켓몬 상세 정보 보기`}
      >
        <img src={pokemon.front} alt={`${pokemon.name} 이미지`} className="w-[120px]" />
        <div className="font-medium">{pokemon.name}</div>
      </Link>
    </article>
  );
};
