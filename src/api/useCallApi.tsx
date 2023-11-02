import { useEffect, useState } from "react";
import { PokemonTypes } from "../types/pokemonTypes";

export const useCallApi = (pokemonName: string) => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();

	useEffect(() => {
		const fetchPokemonInfo = async () => {
			try {
				const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error, status: ${response.status}`);
				}

				const data = await response.json();
				setPokemonInfo(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchPokemonInfo();
	}, []);

	return pokemonInfo;
};
