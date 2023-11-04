import { useEffect, useState } from "react";
import { PokemonTypes } from "../types/pokemonTypes";

export const useFetchApi = () => {
	// const [pokemonData, setPokemonData] = useState<PokemonTypes>();

	const getAPIData = async (pokemonName: string) => {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP ERROR, status: ${response.status}`);
			}

			const data = await response.json();
			// setPokemonData(data);
			return data;
		} catch (error) {
			console.error("Error fetching data", error);
		}
	};

	return { getAPIData };
};
