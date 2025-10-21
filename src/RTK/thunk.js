import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonById } from "@api";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    try {
      const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
      return await Promise.all(numberArray.map((id) => getPokemonById(id)));
    } catch (error) {
      console.error("포켓몬 데이터 조회 실패:", error);
      throw error;
    }
  }
);
