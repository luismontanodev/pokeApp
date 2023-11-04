import React, { useState } from "react";
import {
	HomeContainer,
	ResultContainer,
	SearchButton,
	SearchContainer,
	SearchInput,
} from "./styled";
import { useFetchApi } from "../../api/useFetchApi";
import { PokemonTypes } from "../../types/pokemonTypes";

export const Component = () => {
	const [pokemonName, setPokemonName] = useState<string>("");
	const [pokemonInfo, setPokemonInfo] = useState<PokemonTypes>();

	const { getAPIData } = useFetchApi();

	const handleSearch = async () => {
		const result = await getAPIData(pokemonName);
		setPokemonInfo(result);

		console.log(pokemonInfo);
	};

	return (
		<HomeContainer>
			<SearchContainer>
				<SearchInput
					type="text"
					placeholder="Type a pokemon name..."
					value={pokemonName}
					onChange={(e) => setPokemonName(e.target.value)}
				/>
				<SearchButton onClick={handleSearch}>Search</SearchButton>
			</SearchContainer>

			<ResultContainer>
				<h1>{pokemonInfo?.name}</h1>
				<h1>{pokemonInfo?.abilities[0].ability.name}</h1>
				<img
					src={pokemonInfo?.sprites.other["official-artwork"].front_default}
				/>
			</ResultContainer>
		</HomeContainer>
	);
};

export { Component as PokemonHome };
