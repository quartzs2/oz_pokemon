import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="w-[150px] border border-gray-400 flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-[10px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img src={pokemon.front} alt={pokemon.name} className="w-[120px]" />
      <div>{pokemon.name}</div>
    </section>
  );
};
